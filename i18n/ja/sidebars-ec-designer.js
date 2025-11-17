// i18n/ja/sidebars-ec-designer.js
export default {
  "ec-designerSidebar": [
    {
      type: 'category',
      label: 'はじめに',
      items: [
        'get-started/overview',
        'get-started/key-concept',
      ],
    },
 //   {
   //   type: 'category',
    //  label: '登録方法',
    //  items: [
    //    'how-to-register/new-user-registration',
    //  ],
   // },
   //  {
   //   type: 'category',
   //   label: "使い方",
   //   items: [
   //     "how-to/products-publishing",
   //   ],
  //  },

	{
  type: 'category',
  label: 'フォトブックデザイナー',
  link: {
    type: 'doc',
    id: 'photobook-designer/overview',
  },
  items: [
    'photobook-designer/tutorial',
    'photobook-designer/set-up-a-photobook-product-blank',
    'photobook-designer/photobook-designer-template-creator',
  ],
},  
    {
      type: 'category',
      label: '印刷デザイナー',
      items: [
      'print-designer/set-up-a-print-product-blank',
        'print-designer/print-designer-template-creator',
      ],
    },
    {
      type: 'category',
      label: '暦デザイナー',
      items: [
      'calendar-designer/set-up-a-calendar-product-blank',
      'calendar-designer/calendar-designer-template-creator',
      ],
    },
    {
      type: 'category',
      label: '特注製品デザイナー',
      items: [
      'custom-product-designer/set-up-a-decor-product-blank',
      'custom-product-designer/custom-product-designer',
      ],
    },
	 {
      type: 'category',
      label: 'DTF製品デザイナー',
      items: [
      'DTF-product-designer/set-up-a-tshirt-product-blank',
	  'DTF-product-designer/set-up-a-tshirt-template',	  
      ],
    },      
    {
      type: 'category',
      label: '製品設定',
      items: [
        'product-setup/create-a-product',
        'product-setup/ready-product-flow',
        'product-setup/custom-product-flow',
      ],
    },
    {
      type: 'category',
      label: '製品テンプレートの作成',
     items: [
      'create-a-product-blank/set-up-a-photobook-product-blank',
      'create-a-product-blank/set-up-a-print-product-blank',
      'create-a-product-blank/set-up-a-decor-product-blank',
      'create-a-product-blank/set-up-a-calander-product-blank',
        'create-a-product-blank/mask-img-generation',
      ],
    },
    {
      type: 'category',
      label: '公開・更新・接続',
      items: [
        'publish-update-connect/publish-download-product',
        'publish-update-connect/update-product-status',
        'publish-update-connect/connect-your-online-store',
      ],
    },
    {
      type: 'category',
      label: 'クリエイティブアセット',
      items: [
        'creative-assets/adding-template',
	'creative-assets/create-page-layouts',
        'creative-assets/customize-backgrounds',
        'creative-assets/clipart-management',
		  'creative-assets/mask-img-generation',
      ],
    },
    {
      type: 'category',
      label: '高度な設定',
      items: [
	'advanced-setup/3d-preview', 
	'advanced-setup/add-occasions',      
        'advanced-setup/define-product-categories',
        'advanced-setup/set-product-attributes',
//        'advanced-setup/ui-skinning',
      ],
    },
    {
      type: 'category',
      label: 'ダッシュボード・分析',
      items: [
        'dashboards-analytics/platform-engagement-dashboard',
        'dashboards-analytics/product-conversion-rate',
        'dashboards-analytics/product-orders-dashboard',
        'dashboards-analytics/customer-sales-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'プラグイン・統合',
      items: [
        'plugins-integrations/wordpress-plugin-setup',
        'plugins-integrations/install-sdk',
        'plugins-integrations/connect-to-ccounting-systems',
      ],
    },
    {
      type: 'category',
      label: 'よくある質問・ヘルプ',
      items: [
        'faqs-help/frequently-asked-questions-list',
      ],
    },
    //{
    //  type: 'category',
     // label: '注文フロー',
      //items: [
       // 'ordering-flows/ready',
       // 'ordering-flows/merch',
       // 'ordering-flows/customize',
     // ],
   // },
  ],
};
