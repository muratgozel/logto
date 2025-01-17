import { ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import { type SsoConnector, SsoProviderName } from '@logto/schemas';

import assertThat from '#src/utils/assert-that.js';

import SamlConnector from '../SamlConnector/index.js';
import { type SingleSignOnFactory } from '../index.js';
import { type SingleSignOn } from '../types/index.js';
import { samlConnectorConfigGuard } from '../types/saml.js';
import {
  type SingleSignOnConnectorSession,
  type CreateSingleSignOnSession,
} from '../types/session.js';

/**
 * SAML SSO connector
 *
 * This class extends the basic SAML connector class and add some business related utils methods.
 *
 * @property data The SAML connector data from the database
 *
 * @method getProperties Get the SAML service provider properties.
 * @method getConfig Get parsed SAML config along with it's metadata. Throws error if config is invalid.
 * @method getUserInfo Get social user info.
 */
export class SamlSsoConnector extends SamlConnector implements SingleSignOn {
  constructor(
    readonly data: SsoConnector,
    tenantId: string
  ) {
    const parseConfigResult = samlConnectorConfigGuard.safeParse(data.config);

    if (!parseConfigResult.success) {
      throw new ConnectorError(ConnectorErrorCodes.InvalidConfig, parseConfigResult.error);
    }

    super(parseConfigResult.data, tenantId, data.id);
  }

  async getIssuer() {
    const { identityProvider } = await this.getSamlConfig();

    if (!identityProvider?.entityId) {
      throw new ConnectorError(
        ConnectorErrorCodes.InvalidConfig,
        'Can not get `entityId` from metadata config!'
      );
    }

    return identityProvider.entityId;
  }

  /**
   * Get parsed SAML connector's config along with it's metadata. Throws error if config is invalid.
   *
   * @returns Parsed SAML connector config and it's metadata.
   */
  async getConfig() {
    return this.getSamlConfig();
  }

  /**
   * Get SAML SSO URL.
   * This URL will be used to redirect to the SAML identity provider.
   *
   * @param jti The unique identifier for the connector session.
   * @param redirectUri The redirect uri for the identity provider.
   * @param state The state generated by Logto experience client.
   * @param setSession Set the connector session data to the oidc provider session storage. @see @logto/connector-kit
   */
  async getAuthorizationUrl(
    {
      jti,
      redirectUri,
      state,
      connectorId,
    }: { jti: string; redirectUri: string; state: string; connectorId: string },
    setSession: CreateSingleSignOnSession
  ) {
    // We use jti as the value of the RelayState in the SAML request. So we can get it back from the SAML response and retrieve the connector session.
    const singleSignOnUrl = await this.getSingleSignOnUrl(jti);
    await setSession({ connectorId, redirectUri, state });

    return singleSignOnUrl;
  }

  /**
   * Get social user info.
   *
   * @param connectorSession The connector session data from interaction session storage.
   * @returns The social user info extracted from SAML assertion.
   *
   * @remarks For SAML connector, userInfo will be extracted from the SAML assertion by ACS callback endpoint.
   * This method only asserts the userInfo is not null and directly return it.
   */
  async getUserInfo({ userInfo }: SingleSignOnConnectorSession) {
    assertThat(userInfo, 'session.connector_validation_session_not_found');

    return userInfo;
  }
}

export const samlSsoConnectorFactory: SingleSignOnFactory<SsoProviderName.SAML> = {
  providerName: SsoProviderName.SAML,
  logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMDk5QzAgMTcuNDYzMyAyLjUxNDM0IDcuNjMwMjggNy43MTI5MSAxLjA0MTE0QzQuMDQzMzMgNy45NjgxOCAxLjkwODcxIDEyLjY1ODQgMy40NjU3MSAxNi4zMTQ0QzQuNjg4OTEgMTkuMTg2NiAxMC45NzQ4IDE4LjI3NDMgMTQuMzcyNSAxNy4xMjU0QzguMzI0NTEgMTkuODYyNCAyLjExNzk0IDIwLjIzNDEgMCAyMC4wOTlaIiBmaWxsPSIjQzEyNzJEIi8+CjxwYXRoIGQ9Ik0xMS4yNjA1IDAuNzQ5ODc4QzEzLjU1NTYgMi4wNjc3MSAyMC44NjEzIDkuMTQ5NzEgMjQgMTYuOTIxNkMxOS44MDI1IDEwLjI5NzYgMTYuNzg1NSA2LjExNDA0IDEyLjgyMzMgNS42MjcwMUM5LjcxMDQ5IDUuMjQ0NCA3LjM2MjA1IDExLjExNDMgNi42NjM2NCAxNC42MTUxQzcuMzA0MTggOC4wMzc2OCAxMC4wODM4IDIuNTA2MzggMTEuMjYwNSAwLjc0OTg3OFoiIGZpbGw9IiNDMTI3MkQiLz4KPHBhdGggZD0iTTIyLjUzMTkgMjAuMDc1NUMyMC4yMzY4IDIxLjM5MzMgMTAuNDE2OCAyNC4xNDQzIDIuMDc5NTMgMjIuOTYxNkM5Ljk0NjU0IDIyLjY1ODUgMTUuMDk4MiAyMi4xNTE5IDE3LjUwMzQgMTguOTgyOUMxOS4zOTMgMTYuNDkzMyAxNS40NTU2IDExLjUzNTcgMTIuNzU2MiA5LjE4Mzg0QzE4LjE2MzcgMTMuMDI0MiAyMS41OTA3IDE4LjE4MzggMjIuNTMxOSAyMC4wNzU1WiIgZmlsbD0iI0MxMjcyRCIvPgo8L3N2Zz4K',
  description: {
    en: 'This connector is used to connect to SAML single sign-on identity provider.',
  },
  configGuard: samlConnectorConfigGuard,
  constructor: SamlSsoConnector,
};
