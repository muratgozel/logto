/* eslint-disable max-lines */
import en from './en';

const translation = {
  general: {
    placeholder: '占位符',
    skip: '跳过',
    next: '下一步',
    retry: '重试',
    done: '完成',
    search: '搜索',
    save_changes: '保存更改',
    loading: '读取中...',
    redirecting: '页面跳转中...',
    added: '已添加',
    cancel: '取消',
    confirm: '确认',
    check_out: '查看',
    create: '创建',
    set_up: '配置',
    customize: '自定义',
  },
  main_flow: {
    input: {
      username: '用户名',
      password: '密码',
      email: '邮箱',
      phone_number: '手机号',
      confirm_password: '确认密码',
    },
    secondary: {
      sign_in_with: '通过 {{methods, list(type: disjunction;), zhOrSpaces}} 登录',
      social_bind_with:
        '绑定到已有账户? 使用 {{methods, list(type: disjunction;), zhOrSpaces}} 登录并绑定。',
    },
    action: {
      sign_in: '登录',
      continue: '继续',
      create_account: '创建账号',
      create: '创建',
      enter_passcode: '输入验证码',
      cancel: '取消',
      confirm: '确认',
      bind: '绑定到 {{address}}',
      back: '返回',
      nav_back: '返回',
      agree: '同意',
      got_it: '知道了',
      sign_in_with: '通过 {{name}} 登录',
    },
    description: {
      email: '邮箱',
      phone: '手机',
      phone_number: '手机',
      reminder: '提示',
      not_found: '404 页面不存在',
      loading: '读取中...',
      redirecting: '页面跳转中...',
      agree_with_terms: '我已阅读并同意 ',
      agree_with_terms_modal: 'Please read the {{terms}} and then agree the box first.',
      terms_of_use: '使用条款',
      create_account: '创建账号',
      forgot_password: '忘记密码？',
      or: '或',
      enter_passcode: '验证码已经发送至您的{{ address }}',
      passcode_sent: '验证码已经发送',
      resend_after_seconds: '在 {{ seconds }} 秒后重发',
      resend_passcode: '重发验证码',
      continue_with: '通过以下方式继续',
      create_account_id_exists: '{{type}}为 {{ value }} 的账号已存在，您要登录吗？',
      sign_in_id_does_not_exists: '{{type}}为 {{ value }} 的账号不存在，您要创建一个新账号吗？',
      bind_account_title: '绑定 Logto 账号',
      social_create_account: 'No account? You can create a new account and bind.',
      social_bind_account: 'Already have an account? Sign in to bind it with your social identity.',
      social_bind_with_existing: 'We find a related account, you can bind it directly.',
    },
    error: {
      username_password_mismatch: '用户名和密码不匹配。',
      username_required: '用户名必填',
      password_required: '密码必填',
      username_exists: '用户名已存在。',
      username_should_not_start_with_number: '用户名不能以数字开头。',
      username_valid_charset: '用户名只能包含英文字母、数字或下划线。',
      invalid_email: '无效的邮箱。',
      invalid_phone: '无效的手机号。',
      password_min_length: '密码最少需要{{min}}个字符。',
      passwords_do_not_match: '密码不匹配。',
      agree_terms_required: '你需要同意使用条款以继续。',
      invalid_passcode: '无效的验证码。',
      invalid_connector_auth: '登录失败。',
      invalid_connector_request: '无效的登录请求。',
      request: '请求错误：{{ message }}', // All error messages end with '。'.
      unknown: '未知错误，请稍后重试。',
      invalid_session: '未找到有效的会话，请重新登录。',
    },
  },
  admin_console: {
    title: '管理面板',
    sign_out: '登出',
    profile: '账户管理',
    copy: {
      pending: '拷贝',
      copying: '拷贝中',
      copied: '已拷贝',
    },
    form: {
      required: '必填',
      add_another: '+ 添加其它',
      confirm: '注意',
      cancel: '取消',
      delete: '删除',
      deletion_confirmation: '你确定要删除这个 {{title}} 吗?',
    },
    errors: {
      something_went_wrong: '哎哟喂，遇到了一个错误',
      unknown_server_error: '服务器发生未知错误。',
      empty: '没有数据',
      missing_total_number: '无法从返回的头部信息中找到 Total-Number。',
      invalid_uri_format: '无效的 URI 格式',
      invalid_origin_format: '无效的 URI origin 格式',
      required_field_missing: '请输入{{field}}',
      required_field_missing_plural: '{{field}}不能全部为空',
      more_details: '查看详情',
      username_pattern_error: '用户名只能包含英文字母、数字或下划线，且不以数字开头。',
      password_pattern_error: '密码应不少于 6 位。',
    },
    tab_sections: {
      overview: '概览',
      resource_management: '资源管理',
      user_management: '用户管理',
      help_and_support: '帮助与支持',
    },
    tabs: {
      get_started: '开始使用',
      dashboard: '仪表盘',
      applications: '应用集',
      api_resources: 'API 资源',
      sign_in_experience: '登录体验',
      connectors: '连接器',
      users: '用户管理',
      audit_logs: '审计日志',
      documentation: '文档',
      contact_us: '联系我们',
      settings: '设置',
    },
    applications: {
      title: '应用集',
      subtitle: '创建一个移动、单页或传统应用程序，并通过 Logto 进行身份验证.',
      create: '创建应用',
      application_name: '应用名称',
      application_description: '应用描述',
      select_application_type: '选择一个应用类型',
      no_application_type_selected: '你还没有选用任意一种应用类型.',
      application_created: '应用 {{name}} 成功创建! \n现在请完成你的应用设置.',
      client_id: 'Client ID',
      type: {
        native: {
          title: '原生应用',
          subtitle: 'Mobile, desktop, CLI and smart device apps running natively.',
          description: 'E.g.: iOS, Electron, Apple TV apps',
        },
        spa: {
          title: '单页应用',
          subtitle: 'A JavaScript front-end app that uses an API.',
          description: 'E.g.: Angular, React, Vue',
        },
        traditional: {
          title: '传统网页应用',
          subtitle: 'Traditional web app using redirects.',
          description: 'E.g.: Node.js, Express, ASP.NET, Java, PHP',
        },
      },
      guide: {
        get_sample_file: '获取示例工程',
        header_description:
          '参考如下教程，将 Logto 集成到您的应用中。您也可以点击右侧链接，获取我们为您准备好的示范工程。',
        title: '恭喜！您的应用已成功创建。',
        subtitle: '请参考以下步骤完成您的应用设置。首先，请选择您要使用的 SDK 类型：',
        description_by_sdk: '本教程向您演示如何在 {{sdk}} 应用中集成 Logto 登录功能',
      },
    },
    application_details: {
      back_to_applications: '返回应用集',
      check_help_guide: '查看帮助引导',
      settings: '设置',
      advanced_settings: '高级设置',
      application_name: '应用名称',
      description: '描述',
      authorization_endpoint: 'Authorization Endpoint',
      redirect_uri: 'Redirect URI',
      post_sign_out_redirect_uri: 'Post Sign Out Redirect URI',
      cors_allowed_origins: 'CORS Allowed Origins',
      add_another: '继续添加',
      id_token_expiration: 'ID Token Expiration',
      refresh_token_expiration: 'Refresh Token Expiration',
      token_endpoint: 'Token Endpoint',
      user_info_endpoint: 'User Info Endpoint',
      save_changes: '保存修改',
      more_options: '更多选项',
      options_delete: '删除',
      reminder: '提示',
      delete_description:
        '此项操作不可撤销。他将会永久性地删除此应用。请输入 <span>{{name}}</span> 以确认.',
      enter_your_application_name: '输入你的应用名称',
      cancel: '取消',
      delete: '删除',
      application_deleted: '应用 {{name}} 成功删除.',
      save_success: '已保存!',
      redirect_uri_required: 'You have to enter at least one redirect URI.',
    },
    api_resources: {
      title: 'API 资源',
      subtitle: '定义可以从已授权的应用程序中使用的 API.',
      create: '创建 API 资源',
      api_name: 'API 名称',
      api_identifier: 'API Identifier',
      api_resource_created: ' API 资源 {{name}} 已被成功创建!',
    },
    api_resource_details: {
      back_to_api_resources: '返回我的 API 资源',
      check_help_guide: '查看帮助引导',
      more_options: '更多选项',
      options_delete: '删除',
      settings: '设置',
      save_changes: 'Save Changes',
      token_expiration_time_in_seconds: 'Token Expiration Time (in seconds)',
      reminder: '提示',
      delete_description:
        '此项操作不可撤销。他将会永久性地删除此 API 资源。请输入 API 资源名称 <span>{{name}}</span> 以确认.',
      enter_your_api_resource_name: '输入 API 资源名称',
      cancel: '取消',
      delete: '删除',
      api_resource_deleted: ' API 资源 {{name}} 已删除.',
      save_success: '已保存!',
    },
    connectors: {
      title: '连接器',
      subtitle: '设置连接器，开启无密码和社会化登录。',
      create: '添加社会化登录',
      added: '已添加',
      set_up: '设置',
      tab_email_sms: '邮件/短信服务商',
      tab_social: '社会化登录',
      connector_name: '连接器',
      connector_type: '类型',
      connector_status: '登录体验',
      connector_status_in_use: '使用中',
      connector_status_not_in_use: '未使用',
      social_connector_eg: '如: 微信登录，支付宝登录，微博登录',
      next: '下一步',
      type: {
        email: '邮件服务商',
        sms: '短信服务商',
        social: '社会化登录',
      },
      setup_title: {
        email: '设置邮件服务商',
        sms: '设置短信服务商',
        social: '添加社会化登录',
      },
      guide: {
        subtitle: '请参考下列分步指南，配置您的 connector，或点击按钮获取示例配置文件',
      },
      platform: {
        universal: '通用',
        web: '网页',
        native: '原生',
      },
      add_multi_platform: ' 支持多平台，请选择一个平台继续',
    },
    connector_details: {
      back_to_connectors: '返回连接器',
      check_readme: '查看文档',
      tab_settings: '设置',
      save_changes: '保存',
      save_error_empty_config: '请输入配置内容。',
      save_error_json_parse_error: '请输入符合 JSON 格式的配置。',
      save_success: '保存成功',
      send: 'Send',
      send_error_invalid_format: 'Invalid input',
      test_email_sender: 'Test your email sender',
      test_sms_sender: 'Test your SMS sender',
      test_message_sent: 'Test Message Sent!',
      test_sender_description: 'Test sender description',
      options: '操作',
      options_delete: '删除',
      options_change_email: '更换邮件服务商',
      options_change_sms: '更换短信服务商',
      more_options: '更多选项',
      connector_deleted: '成功删除连接器。',
      type_email: '邮件连接器',
      type_sms: '短信连接器',
      type_social: '社交连接器',
    },
    get_started: {
      progress: '开始使用: {{completed}}/{{total}}',
      progress_dropdown_title: '快速上手',
      title: '还不知道如何使用 Logto?',
      subtitle_part1: '下列是一些适合您快速上手的事情，您可以更好得感受 Logto 的价值。',
      subtitle_part2: '我已经完成了这些设置。',
      hide_this: '隐藏引导',
      confirm: '确认提醒',
      confirm_message: '您确认要隐藏该页面吗? 本操作将无法恢复。',
      card1_title: '看看 Demo',
      card1_subtitle: '试试 Logto 登录体验，来看看它是怎样运行的。',
      card2_title: '创建你的第一款应用',
      card2_subtitle: '创建一个移动、单页或传统应用程序，并通过 Logto 进行身份验证。',
      card3_title: '实现手机和邮箱验证登录',
      card3_subtitle: '尝试无密码登录，赋予用户一个安全无缝的体验。',
      card4_title: '添加社会化连接器',
      card4_subtitle: '让你的用户通过社交账号一键登录',
      card5_title: '自定义你的登录体验',
      card5_subtitle: '自定义符合品牌形象的登录界面，并实时预览真实效果。',
      card6_title: '更多阅读',
      card6_subtitle: '查看我们一步一步，基于场景的引导。没有复杂的概念，简单上手。',
    },
    users: {
      title: '用户管理',
      subtitle: '管理已注册用户, 创建新用户，编辑用户资料。',
      create: '添加用户',
      user_name: '用户',
      application_name: '注册应用',
      latest_sign_in: '最后登录',
      create_form_username: '用户名',
      create_form_password: '密码',
      create_form_name: '姓名',
      unnamed: '未命名',
    },
    user_details: {
      back_to_users: '返回用户管理',
      created_title: '恭喜！用户创建成功',
      created_guide: '用户信息如下',
      created_username: '用户名：',
      created_password: '初始密码：',
      created_button_close: '关闭',
      created_button_copy: '拷贝',
      more_options: '更多操作',
      menu_delete: '删除用户',
      delete_title: '注意',
      delete_description: '本操作无法撤消，将删除此用户。',
      delete_cancel: '取消',
      delete_confirm: '删除',
      deleted: '用户已成功删除。',
      reset_password: {
        title: '重置密码',
        label: '新密码：',
        reset_password: '重置密码',
        reset_password_success: '密码已成功重置。',
      },
      tab_settings: '设置',
      tab_logs: '用户日志',
      field_email: '首选邮箱',
      field_phone: '首选手机号码',
      field_username: '用户名',
      field_name: '名称',
      field_avatar: '头像图片链接',
      field_roles: '角色',
      field_custom_data: '自定义数据',
      field_connectors: '社交账号',
      custom_data_invalid: '自定义数据必须是有效的 JSON',
      save_changes: '保存设置',
      saved: '保存成功!',
      connectors: {
        connectors: '连接器',
        user_id: '用户ID',
        remove: '删除',
        not_connected: '该用户还没有绑定社交账号。',
      },
      roles: {
        default: '默认',
        admin: '管理员',
      },
    },
    contact: {
      title: '联系我们',
      description:
        '加入我们的社区，在这里你可以给我们提供产品建议，寻求帮助或和其他开发者友好交流.',
      discord: {
        title: 'Discord 频道',
        description: 'Join our public channel to chat with developers.',
        button: '立即加入',
      },
      github: {
        title: 'GitHub',
        description: 'Create an issue.',
        button: '马上联系',
      },
      email: {
        title: '通过邮件联系',
        description: 'If you have any question.',
        button: '发送邮件',
      },
    },
    sign_in_exp: {
      title: '登录体验',
      description: '自定义登录界面，并实时预览真实效果。',
      tabs: {
        experience: '体验',
        methods: '登录方式',
        others: '其它',
      },
      welcome: {
        title: '这是你首次定义你的登录体验。请跟随教程，完成登录体验的必要设置项。',
        get_started: '开始',
        apply_remind: '请注意，登录体验将会应用到当前账户下的所有应用。',
        got_it: '知道了',
      },
      branding: {
        title: '品牌',
        primary_color: '品牌颜色',
        dark_primary_color: '品牌颜色 (暗黑)',
        dark_mode: '开启暗黑模式',
        dark_mode_description:
          '基于你的品牌颜色和 Logto 的算法，你的应用将会有一个自动生成的暗黑模式。当然，你可以自定义和修改。',
        ui_style: '品牌定制区',
        styles: {
          logo_slogan: 'App logo 和标语',
          logo: '仅有Logo',
        },
        logo_image_url: 'Logo 图片 URL',
        dark_logo_image_url: 'Logo 图片 URL (暗黑)',
        slogan: '标语',
        slogan_placeholder: 'Unleash your creativity',
      },
      terms_of_use: {
        title: '使用条款',
        enable: '开启使用条款',
        description: '添加使用您的产品的法律协议。它们充当产品和用户之间的合同。',
        terms_of_use: '使用条款',
        terms_of_use_placeholder: '使用条款 URL',
        terms_of_use_tip: '使用条款 URL',
      },
      sign_in_methods: {
        title: '登录方式',
        primary: '首选登录方式',
        enable_secondary: '启用其它登录方式',
        enable_secondary_description:
          '开启后，除了首选登录方式，你的 app 将会支持更多其它的登录方式 ',
        methods: '登录方式',
        methods_sms: '短信验证码登录',
        methods_email: '邮箱登录',
        methods_social: '社交账号登录',
        methods_username: '用户名密码登录',
        methods_primary_tag: '（首选）',
        define_social_methods: '定义社会化登录方式',
        transfer: {
          title: '社会化连接器',
          footer: {
            not_in_list: '不在列表里？',
            set_up_more: '设置更多',
            go_to: '连接器，或前往连接器模块',
          },
        },
      },
      others: {
        languages: {
          title: '语言',
          mode: '语言模式',
          auto: '自动',
          fixed: '固定',
          fallback_language: 'Fallback language',
          fixed_language: 'Fixed language',
          languages: {
            english: '英文',
            chinese: '中文',
          },
        },
      },
      setup_warning: {
        setup: '设置',
        no_connector: '',
        no_connector_sms: '你还没有设置 SMS 连接器。你需完成设置后登录体验才会生效。',
        no_connector_email: '你还没有设置 Email 连接器。你需完成设置后登录体验才会生效。',
        no_connector_social: '你还没有设置社会化连接器。你需完成设置后登录体验才会生效。',
        no_added_social_connector:
          '你已经成功设置了一些社会化连接器。确认添加一些到你的登录体验。你可以拖拽改变他们的顺序。',
      },
      save_alert: {
        title: '提示',
        description: '你正在修改登录方式，这可能会影响部分用户。是否继续保存修改？',
        before: '修改前',
        after: '修改后',
      },
      preview: {
        title: '登录预览',
        languages: {
          english: '英文',
          chinese: '中文',
        },
        dark: 'Dark',
        light: 'Light',
        mobile: 'Mobile',
        web: 'Web',
        mobile_description: 'Mobile includes mobile web, Android and iOS.',
      },
    },
    settings: {
      title: '设置',
      description: '全局设置',
      tabs: {
        general: '通用',
      },
      custom_domain: '自定义域名',
      language: '语言',
      language_english: '英语',
      language_chinese: '中文',
      appearance: '外观',
      appearance_system: '跟随系统',
      appearance_light: '浅色模式',
      appearance_dark: '暗黑模式',
      saved: '已保存',
    },
    dashboard: {
      title: '仪表盘',
      description: '查看运行总览',
      total_users: '总用户',
      new_users_today: '今日新增',
      new_users_7_days: '7日新增',
      daily_active_users: '日活用户',
      weekly_active_users: '周活用户',
      monthly_active_users: '月活用户',
    },
    logs: {
      title: '审计日志',
      subtitle: '查看用户日志',
      event: '事件',
      user: '用户',
      application: '应用',
      time: '时间',
      filter_by: '过滤',
    },
    session_expired: {
      title: '会话已过期',
      subtitle: '会话可能已过期，您已被登出. 请点击下方按钮重新登录到管理界面.',
      button: '重新登录',
    },
  },
  demo_app: {
    notification: '请使用管理员账号密码登录本示例应用',
    title: '恭喜！你已成功登录到示例应用！',
    subtitle: '以下是你本次登录的用户信息：',
    username: '用户名：',
    user_id: '用户 ID：',
    sign_out: '登出',
    continue_explore: '或继续探索',
    customize_sign_in_experience: '自定义登录体验',
    enable_passwordless: '启用无密码登录',
    add_social_connector: '添加社会化连接器',
  },
};

const errors = {
  auth: {
    authorization_header_missing: 'Authorization 请求 header 遗漏。',
    authorization_token_type_not_supported: '不支持的 authorization 类型。',
    unauthorized: '未授权。请检查相关 credentials 和 scope。',
    jwt_sub_missing: 'JWT 中找不到 `sub`。',
  },
  guard: {
    invalid_input: '请求内容有误。',
    invalid_pagination: '分页参数有误。',
  },
  oidc: {
    aborted: '用户终止了交互。',
    invalid_scope: '不支持的 scope: {{scopes}}。',
    invalid_scope_plural: '不支持的 scope: {{scopes}}。',
    invalid_token: 'token 无效。',
    invalid_client_metadata: '无效 client metadata。',
    insufficient_scope: '请求 token 缺少一下权限: {{scopes}}。',
    invalid_request: '请求失败。',
    invalid_grant: '授权失败。',
    invalid_redirect_uri: '无效返回链接, 该 redirect_uri 未被此应用注册。',
    access_denied: '拒绝访问。',
    invalid_target: '请求资源无效。',
    unsupported_grant_type: '不支持的 grant_type。',
    unsupported_response_mode: '不支持的 response_mode。',
    unsupported_response_type: '不支持的 response_type。',
    provider_error: 'OIDC 错误: {{message}}。',
  },
  user: {
    username_exists_register: '用户名已被注册。',
    email_exists_register: '邮箱地址已被注册。',
    phone_exists_register: '手机号码已被注册。',
    invalid_email: '邮箱地址不正确。',
    invalid_phone: '手机号码不正确。',
    username_not_exists: '用户名尚未注册。',
    email_not_exists: '邮箱地址尚未注册。',
    phone_not_exists: '手机号码尚未注册。',
    identity_not_exists: '该社交账号尚未注册。',
    identity_exists: '该社交账号已被注册。',
  },
  password: {
    unsupported_encryption_method: '不支持的加密方法 {{name}}。',
    pepper_not_found: '密码 pepper 未找到。请检查 core 的环境变量。',
  },
  session: {
    not_found: 'Session not found. Please go back and sign in again.',
    invalid_credentials: '用户名或密码错误，请检查您的输入。',
    invalid_sign_in_method: '当前登录方式不可用。',
    invalid_connector_id: '无法找到 ID 为 {{connectorId}} 的可用连接器。',
    insufficient_info: '登录信息缺失，请检查您的输入。',
    connector_id_mismatch: '传入的连接器 ID 与 session 中保存的记录不一致。',
    connector_session_not_found: '无法找到连接器登录信息，请尝试重新登录。',
    unauthorized: '请先登录。',
    unsupported_prompt_name: '不支持的 prompt name。',
  },
  connector: {
    general: '连接器发生未知错误。',
    not_found: '找不到可用的 {{type}} 类型的连接器。',
    not_enabled: '连接器尚未启用。',
    invalid_config: '连接器配置错误。',
    template_not_found: '无法从连接器配置中找到对应的模板。',
    access_token_invalid: '当前连接器的 access_token 无效。',
    oauth_code_invalid: '无法获取 access_token，请检查授权 code 是否有效。',
    more_than_one_sms: '同时存在超过 1 个短信连接器。',
    more_than_one_email: '同时存在超过 1 个邮件连接器。',
    db_connector_type_mismatch: '数据库中存在一个类型不匹配的连接器。',
  },
  passcode: {
    phone_email_empty: '手机号与邮箱地址均为空。',
    not_found: '验证码不存在，请先请求发送验证码。',
    phone_mismatch: '手机号码不匹配. 请尝试请求新的验证码。',
    email_mismatch: '邮箱地址不匹配. 请尝试请求新的验证码。',
    code_mismatch: '验证码不正确。',
    expired: '验证码已过期. 请尝试请求新的验证码。',
    exceed_max_try: '超过最大验证次数. 请尝试请求新的验证码。',
  },
  sign_in_experiences: {
    empty_content_url_of_terms_of_use:
      '空的《用户协议》内容链接。当启用《用户协议》时，请添加其内容链接。',
    empty_slogan: '空的标语。当使用包含标语的 UI 风格时，请添加标语。',
    empty_social_connectors:
      '空的 social 连接器。当启用社交网络连接器的登录方式时，请添加可用的 social 连接器。',
    enabled_connector_not_found: '未找到可用的 {{type}} 类型的连接器。',
    invalid_social_connectors:
      '无效的 social 连接器。请确认你选择的所有连接器都可用，并且是 social 类型的。',
    not_one_and_only_one_primary_sign_in_method: '主要的登录方式必须有且仅有一个，请检查你的输入。',
  },
  swagger: {
    invalid_zod_type: '无效的 Zod 类型，请检查路由 guard 配置。',
    not_supported_zod_type_for_params: '请求参数不支持的 Zod 类型，请检查路由 guard 配置。',
  },
  entity: {
    create_failed: '创建 {{name}} 失败。',
    not_exists: '该 {{name}} 不存在。',
    not_exists_with_id: 'ID 为 `{{id}}` 的 {{name}} 不存在。',
    not_found: '该资源不存在。',
  },
};

const zhCN: typeof en = Object.freeze({
  translation,
  errors,
});

export default zhCN;
/* eslint-enable max-lines */
