import{d as _,c as F,a as n,e as N,m as s,b as o,t as r,n as A,o as t,F as y,f as k}from"./iframe-_o9WQugg.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const T={key:0,class:"footer-branding"},Y={class:"flex items-center gap-3"},D=["src","alt"],q={key:0,class:"font-bold text-lg"},M={key:1,class:"text-sm opacity-70"},j={key:1,class:"footer-links"},O={key:0,class:"footer-title"},P={class:"flex flex-col gap-1"},H=["href","target","rel"],I={key:2,class:"footer-social"},V={class:"grid grid-flow-col gap-4"},z=["href","aria-label"],E=["innerHTML"],Q={key:1},$={key:0,class:"footer-center"},G={class:"text-center"},U={class:"text-sm opacity-70"},w=_({__name:"Footer",props:{variant:{default:"default"},brandName:{},brandDescription:{},logo:{},logoAlt:{default:"Brand logo"},links:{},social:{},showBranding:{type:Boolean,default:!0},showCopyright:{type:Boolean,default:!0},copyrightText:{default:`© ${new Date().getFullYear()} - All rights reserved`}},setup(S){const C=S,L=F(()=>{const e=["footer","p-10","bg-base-200","text-base-content"];return C.variant==="center"?e.push("footer-center"):C.variant==="grid"&&e.push("grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-8"),e.join(" ")});return(e,W)=>(t(),n("footer",{class:A(L.value)},[N(e.$slots,"default",{},()=>[e.showBranding?(t(),n("div",T,[o("div",Y,[e.logo?(t(),n("img",{key:0,src:e.logo,alt:e.logoAlt,class:"h-8 w-auto"},null,8,D)):s("",!0),o("div",null,[e.brandName?(t(),n("p",q,r(e.brandName),1)):s("",!0),e.brandDescription?(t(),n("p",M,r(e.brandDescription),1)):s("",!0)])])])):s("",!0),e.links&&e.links.length>0?(t(),n("div",j,[(t(!0),n(y,null,k(e.links,a=>(t(),n("div",{key:a.title,class:"footer-section"},[a.title?(t(),n("h3",O,r(a.title),1)):s("",!0),o("nav",P,[(t(!0),n(y,null,k(a.items,l=>(t(),n("a",{key:l.label,href:l.href,target:l.external?"_blank":void 0,rel:l.external?"noopener noreferrer":void 0,class:"link link-hover"},r(l.label),9,H))),128))])]))),128))])):s("",!0),e.social&&e.social.length>0?(t(),n("div",I,[o("div",V,[(t(!0),n(y,null,k(e.social,a=>(t(),n("a",{key:a.name,href:a.href,"aria-label":a.name,target:"_blank",rel:"noopener noreferrer",class:"link"},[a.icon?(t(),n("span",{key:0,innerHTML:a.icon},null,8,E)):(t(),n("span",Q,r(a.name),1))],8,z))),128))])])):s("",!0)],!0),e.showCopyright?(t(),n("div",$,[o("aside",G,[o("p",U,r(e.copyrightText),1)])])):s("",!0)],2))}}),x=B(w,[["__scopeId","data-v-ea83d03c"]]);w.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"center"'},{name:'"grid"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"brandName",required:!1,type:{name:"string"}},{name:"brandDescription",required:!1,type:{name:"string"}},{name:"logo",required:!1,type:{name:"string"}},{name:"logoAlt",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Brand logo'"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"FooterSection"}]}},{name:"social",required:!1,type:{name:"Array",elements:[{name:"SocialLink"}]}},{name:"showBranding",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showCopyright",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"copyrightText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"`© ${new Date().getFullYear()} - All rights reserved`"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Footer.vue"]};const X={title:"Layout/Footer",component:x,parameters:{layout:"fullscreen"},argTypes:{variant:{control:{type:"select"},options:["default","center","compact"]},showBranding:{control:{type:"boolean"}},showSocial:{control:{type:"boolean"}},showCopyright:{control:{type:"boolean"}}}},v=[{title:"Company",items:[{label:"About Us",href:"/about"},{label:"Careers",href:"/careers"},{label:"Press",href:"/press"},{label:"Blog",href:"/blog"}]},{title:"Support",items:[{label:"Help Center",href:"/help"},{label:"Contact Us",href:"/contact"},{label:"Documentation",href:"/docs"},{label:"API",href:"/api"}]},{title:"Legal",items:[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"},{label:"Cookie Policy",href:"/cookies"}]}],i=[{platform:"twitter",href:"https://twitter.com/company",label:"Twitter"},{platform:"facebook",href:"https://facebook.com/company",label:"Facebook"},{platform:"instagram",href:"https://instagram.com/company",label:"Instagram"},{platform:"linkedin",href:"https://linkedin.com/company",label:"LinkedIn"}],c={args:{brandName:"Your Company",brandDescription:"Building amazing products since 2020",links:v,socialLinks:i,copyrightText:"© 2024 Your Company. All rights reserved."}},d={args:{logo:"https://via.placeholder.com/120x40/6366f1/ffffff?text=LOGO",logoAlt:"Company Logo",brandName:"Your Company",brandDescription:"Innovation at its finest",links:v,socialLinks:i,copyrightText:"© 2024 Your Company. All rights reserved."}},p={args:{variant:"compact",brandName:"Your Company",links:[{title:"",items:[{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Privacy",href:"/privacy"},{label:"Terms",href:"/terms"}]}],socialLinks:i.slice(0,3),copyrightText:"© 2024 Your Company"}},m={args:{variant:"center",brandName:"Your Company",brandDescription:"Centered footer layout",links:v.slice(0,2),socialLinks:i,copyrightText:"© 2024 Your Company. All rights reserved."}},u={args:{brandName:"Minimal Co.",showBranding:!0,showSocial:!1,links:[],copyrightText:"© 2024 Minimal Co."}},f={args:{showBranding:!1,links:[],socialLinks:i,copyrightText:"© 2024 Social Company"}},h={args:{showBranding:!1,showSocial:!1,links:v,copyrightText:"© 2024 Links Company"}},g={render:()=>({components:{Footer:x},template:`
      <Footer>
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-primary-content font-bold text-xl">C</span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Custom Footer</h3>
              <p class="text-sm opacity-70">Completely customizable content</p>
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <h4 class="font-semibold mb-2">Quick Links</h4>
              <div class="flex flex-col gap-1">
                <a href="#" class="link link-hover">Home</a>
                <a href="#" class="link link-hover">About</a>
                <a href="#" class="link link-hover">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Connect</h4>
              <div class="flex gap-3 justify-center md:justify-start">
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">📧</span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">📱</span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">🌐</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="text-center text-sm opacity-70">
          <p>© 2024 Custom Footer. Made with ❤️ using our component library.</p>
        </div>
      </Footer>
    `})},b={render:()=>({components:{Footer:x},template:`
      <Footer 
        brand-name="Newsletter Co."
        brand-description="Stay updated with our latest news"
        copyright-text="© 2024 Newsletter Co."
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="lg:col-span-2">
            <h3 class="font-bold text-lg mb-4">Newsletter Co.</h3>
            <p class="text-sm opacity-70 mb-4">
              Subscribe to our newsletter and stay updated with the latest news, 
              product updates, and exclusive offers.
            </p>
            
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="input input-bordered flex-1"
              />
              <button class="btn btn-primary">Subscribe</button>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Company</h4>
            <div class="flex flex-col gap-1">
              <a href="#" class="link link-hover">About</a>
              <a href="#" class="link link-hover">Careers</a>
              <a href="#" class="link link-hover">Press</a>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Support</h4>
            <div class="flex flex-col gap-1">
              <a href="#" class="link link-hover">Help Center</a>
              <a href="#" class="link link-hover">Contact</a>
              <a href="#" class="link link-hover">FAQ</a>
            </div>
          </div>
        </div>
      </Footer>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Your Company',
    brandDescription: 'Building amazing products since 2020',
    links: sampleLinks,
    socialLinks: sampleSocial,
    copyrightText: '© 2024 Your Company. All rights reserved.'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    logo: 'https://via.placeholder.com/120x40/6366f1/ffffff?text=LOGO',
    logoAlt: 'Company Logo',
    brandName: 'Your Company',
    brandDescription: 'Innovation at its finest',
    links: sampleLinks,
    socialLinks: sampleSocial,
    copyrightText: '© 2024 Your Company. All rights reserved.'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    brandName: 'Your Company',
    links: [{
      title: '',
      items: [{
        label: 'About',
        href: '/about'
      }, {
        label: 'Contact',
        href: '/contact'
      }, {
        label: 'Privacy',
        href: '/privacy'
      }, {
        label: 'Terms',
        href: '/terms'
      }]
    }],
    socialLinks: sampleSocial.slice(0, 3),
    copyrightText: '© 2024 Your Company'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'center',
    brandName: 'Your Company',
    brandDescription: 'Centered footer layout',
    links: sampleLinks.slice(0, 2),
    socialLinks: sampleSocial,
    copyrightText: '© 2024 Your Company. All rights reserved.'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Minimal Co.',
    showBranding: true,
    showSocial: false,
    links: [],
    copyrightText: '© 2024 Minimal Co.'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showBranding: false,
    links: [],
    socialLinks: sampleSocial,
    copyrightText: '© 2024 Social Company'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showBranding: false,
    showSocial: false,
    links: sampleLinks,
    copyrightText: '© 2024 Links Company'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Footer
    },
    template: \`
      <Footer>
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-primary-content font-bold text-xl">C</span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Custom Footer</h3>
              <p class="text-sm opacity-70">Completely customizable content</p>
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <h4 class="font-semibold mb-2">Quick Links</h4>
              <div class="flex flex-col gap-1">
                <a href="#" class="link link-hover">Home</a>
                <a href="#" class="link link-hover">About</a>
                <a href="#" class="link link-hover">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Connect</h4>
              <div class="flex gap-3 justify-center md:justify-start">
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">📧</span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">📱</span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle">
                  <span class="text-lg">🌐</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="text-center text-sm opacity-70">
          <p>© 2024 Custom Footer. Made with ❤️ using our component library.</p>
        </div>
      </Footer>
    \`
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Footer
    },
    template: \`
      <Footer 
        brand-name="Newsletter Co."
        brand-description="Stay updated with our latest news"
        copyright-text="© 2024 Newsletter Co."
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="lg:col-span-2">
            <h3 class="font-bold text-lg mb-4">Newsletter Co.</h3>
            <p class="text-sm opacity-70 mb-4">
              Subscribe to our newsletter and stay updated with the latest news, 
              product updates, and exclusive offers.
            </p>
            
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="input input-bordered flex-1"
              />
              <button class="btn btn-primary">Subscribe</button>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Company</h4>
            <div class="flex flex-col gap-1">
              <a href="#" class="link link-hover">About</a>
              <a href="#" class="link link-hover">Careers</a>
              <a href="#" class="link link-hover">Press</a>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Support</h4>
            <div class="flex flex-col gap-1">
              <a href="#" class="link link-hover">Help Center</a>
              <a href="#" class="link link-hover">Contact</a>
              <a href="#" class="link link-hover">FAQ</a>
            </div>
          </div>
        </div>
      </Footer>
    \`
  })
}`,...b.parameters?.docs?.source}}};const Z=["Default","WithLogo","Compact","Center","MinimalBranding","SocialOnly","LinksOnly","CustomContent","Newsletter"];export{m as Center,p as Compact,g as CustomContent,c as Default,h as LinksOnly,u as MinimalBranding,b as Newsletter,f as SocialOnly,d as WithLogo,Z as __namedExportsOrder,X as default};
