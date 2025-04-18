import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as i,a as d,d as a,e as s,w as t,r as k,o as u}from"./app-CuB3TegB.js";const m={},g={class:"hint-container tip"},y={class:"hint-container details"};function A(b,e){const r=k("RouteLink"),h=k("CodeTabs"),o=k("Tabs");return u(),c("div",null,[e[22]||(e[22]=i("h2",{id:"inspec-content-review",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#inspec-content-review"},[i("span",null,"InSpec Content Review")])],-1)),i("p",null,[e[1]||(e[1]=s("In the ")),a(r,{to:"/courses/beginner/"},{default:t(()=>e[0]||(e[0]=[s("beginner class")])),_:1}),e[2]||(e[2]=s(", we explained the structure of InSpec profiles and controls, how to run them, and how to understand their results. Let's do a brief review of that fundamental content and then practice those basic skills again."))]),e[23]||(e[23]=d(`<h3 id="inspec-profile-structure" tabindex="-1"><a class="header-anchor" href="#inspec-profile-structure"><span>InSpec Profile Structure</span></a></h3><p>Remember that a <code>profile</code> is a set of automated tests that usually relates directly back to some upstream security guidance document.</p><p>Profiles have two (2) <strong>required</strong> elements:</p><ul><li>An <code>inspec.yml</code> file</li><li>A <code>controls</code> directory</li></ul><p>and <strong>optional</strong> elements such as:</p><ul><li>A <code>libraries</code> directory</li><li>A <code>files</code> directory</li><li>An <code>inputs.yml</code> file</li><li>A <code>README.md</code> file</li></ul><p>InSpec can create the profile structure for you using the following command:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">inspec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> profile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my_inspec_profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This will give you the required files along with some optional files.</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my_inspec_profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  my_inspec_profile</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  ├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> controls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  │</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> example.rb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspec.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default-file-structures" tabindex="-1"><a class="header-anchor" href="#default-file-structures"><span>Default File Structures</span></a></h3><h4 id="control-file-structure" tabindex="-1"><a class="header-anchor" href="#control-file-structure"><span>Control File Structure</span></a></h4><p>Let&#39;s take a look at the default Ruby file in the <code>controls</code> directory.</p>`,13)),a(h,{id:"69",data:[{id:"controls/example.rb"}]},{title0:t(({value:l,isActive:n})=>e[3]||(e[3]=[s("controls/example.rb")])),tab0:t(({value:l,isActive:n})=>e[4]||(e[4]=[i("div",{class:"language-ruby line-numbers-mode","data-highlighter":"shiki","data-ext":"ruby",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"title "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'sample section'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# you can also use plain tests")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"describe "),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"file"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'/tmp'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"do")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  it { should be_directory }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"end")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# you add controls here")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"control "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'tmp-1.0'"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," do"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"                        # A unique ID for this control")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  impact "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"0.7"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"                                # The criticality, if this control fails.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  title "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'Create /tmp directory'"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"             # A human-readable title")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  desc "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'An optional description...'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  describe "),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"file"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'/tmp'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"do"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"                  # The actual test")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    it { should be_directory }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"  end")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"end")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),e[24]||(e[24]=d(`<p>This example shows two tests. Both tests check for the existence of the <code>/tmp</code> directory. The second test provides additional information about the test. Let&#39;s break down each component.</p><ul><li><code>control</code> (line 9) is followed by the control&#39;s name. Each control in a profile has a unique name.</li><li><code>impact</code> (line 10) measures the relative importance of the test and must be a value between 0.0 and 1.0.</li><li><code>title</code> (line 11) defines the control&#39;s purpose.</li><li><code>desc</code> (line 12) provides a more complete description of what the control checks for.</li><li><code>describe</code> (lines 13 — 15) defines the test. Here, the test checks for the existence of the <code>/tmp</code> directory.</li></ul><h4 id="describe-block-structure" tabindex="-1"><a class="header-anchor" href="#describe-block-structure"><span>Describe Block Structure</span></a></h4><p>As with many test frameworks, InSpec code resembles natural language. Here&#39;s the format of a describe block.</p><div class="language-ruby line-numbers-mode" data-highlighter="shiki" data-ext="ruby" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">describe </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> entity </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> do</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  it { </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> expectation </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),i("div",g,[e[9]||(e[9]=i("p",{class:"hint-container-title"},"Resources And Matchers",-1)),a(o,{id:"112",data:[{id:"Resources"},{id:"Matchers"}]},{title0:t(({value:l,isActive:n})=>e[5]||(e[5]=[s("Resources")])),title1:t(({value:l,isActive:n})=>e[6]||(e[6]=[s("Matchers")])),tab0:t(({value:l,isActive:n})=>e[7]||(e[7]=[i("p",null,[s("InSpec uses resources like the "),i("code",null,"file"),s(" resource to aid in control development. These resources can often be used as the "),i("code",null,"< entity >"),s(" in the describe block. Find a list of resources in the "),i("a",{href:"https://docs.chef.io/inspec/resources/",target:"_blank",rel:"noopener noreferrer"},"InSpec documentation")],-1)])),tab1:t(({value:l,isActive:n})=>e[8]||(e[8]=[i("p",null,[s("InSpec uses matchers like the "),i("code",null,"cmp"),s(" or "),i("code",null,"eq"),s(" to aid in control development. These matchers can often be used as the "),i("code",null,"< expectation >"),s(" in the describe block where the expectation is checking a requirement of that entity. Find a list of matchers in the "),i("a",{href:"https://docs.chef.io/inspec/matchers/",target:"_blank",rel:"noopener noreferrer"},"InSpec documentation")],-1)])),_:1})]),e[25]||(e[25]=i("h4",{id:"inspec-yml-file-structure",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#inspec-yml-file-structure"},[i("span",null,"inspec.yml File Structure")])],-1)),e[26]||(e[26]=i("p",null,[s("Let's take a look at the default "),i("code",null,"inspec.yml"),s(".")],-1)),a(h,{id:"131",data:[{id:"inspec.yml"}]},{title0:t(({value:l,isActive:n})=>e[10]||(e[10]=[s("inspec.yml")])),tab0:t(({value:l,isActive:n})=>e[11]||(e[11]=[i("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"my_inspec_profile")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"title"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"InSpec Profile")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"maintainer"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"The Authors")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"copyright"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"The Authors")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"copyright_email"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"you@example.com")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"license"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"Apache-2.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"summary"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"An InSpec Compliance Profile")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"0.1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"supports"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  platform"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"os")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# Optional sections")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"depends"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< name of the profile from which you can include controls >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    path"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< relative path to that profile >")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"gem_dependencies"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< name of the gem >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    version"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< version of the gem >")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"inputs"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< name of the input >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    desc"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< description of the input >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    type"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< data type of the input (String, Array, Numeric, Hash) >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"    value"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"< default value for the input >")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),i("p",null,[e[14]||(e[14]=s("This example shows default metadata of the InSpec profile along with the optional sections. Find more information about ")),a(r,{to:"/courses/beginner/06.html"},{default:t(()=>e[12]||(e[12]=[s("inputs")])),_:1}),e[15]||(e[15]=s(" and ")),a(r,{to:"/courses/beginner/10.html"},{default:t(()=>e[13]||(e[13]=[s("overlays")])),_:1}),e[16]||(e[16]=s(" in the beginner class."))]),e[27]||(e[27]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"Tips"),i("p",null,[i("code",null,"version"),s(" (line 8) is the version of that inspec profile. The best practice is for the version to be bumped after making changes to the profile to pull the latest updates.")])],-1)),i("details",y,[e[21]||(e[21]=d("<summary>Difference between &#39;inspec.yml&#39; and &#39;inputs.yml&#39;</summary><table><thead><tr><th>inspec.yml</th><th>inputs.yml</th></tr></thead><tbody><tr><td>Required</td><td>Optional</td></tr><tr><td>Should not be renamed</td><td>Can be renamed</td></tr><tr><td>Needs to be at the root of the profile</td><td>Can be anywhere</td></tr><tr><td>Automatically used during execution<br><code>inspec exec profile1</code></td><td>Needs to be passed in during execution<br><code>inspec exec profile1 --input-file &lt;path&gt;</code></td></tr><tr><td>Declare variables used within the profile, can provide default values</td><td>Override default input values (as needed) with parameters appropriate for the local environments</td></tr><tr><td>Defined by the author of the profile</td><td>Defined by the user of the profile</td></tr></tbody></table>",2)),a(h,{id:"207",data:[{id:"inspec.yml"},{id:"inputs.yml"}]},{title0:t(({value:l,isActive:n})=>e[17]||(e[17]=[s("inspec.yml")])),title1:t(({value:l,isActive:n})=>e[18]||(e[18]=[s("inputs.yml")])),tab0:t(({value:l,isActive:n})=>e[19]||(e[19]=[i("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"name"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"superusers")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  desc"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'List of users with admin privileges'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  type"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"Array")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"  value"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'admin'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'root'")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:t(({value:l,isActive:n})=>e[20]||(e[20]=[i("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"superusers"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'codespaces'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'kali'")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])])}const f=p(m,[["render",A]]),F=JSON.parse(`{"path":"/courses/advanced/02.html","title":"2. Review the Fundamentals","lang":"en-US","frontmatter":{"order":2,"next":"03.md","title":"2. Review the Fundamentals","author":"Aaron Lippold","description":"InSpec Content Review In the , we explained the structure of InSpec profiles and controls, how to run them, and how to understand their results. Let's do a brief review of that ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2. Review the Fundamentals\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T15:29:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aaron Lippold\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/advanced/02.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"2. Review the Fundamentals"}],["meta",{"property":"og:description","content":"InSpec Content Review In the , we explained the structure of InSpec profiles and controls, how to run them, and how to understand their results. Let's do a brief review of that ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-05T15:29:05.000Z"}],["meta",{"property":"article:author","content":"Aaron Lippold"}],["meta",{"property":"article:modified_time","content":"2024-12-05T15:29:05.000Z"}]]},"git":{"createdTime":1656449910000,"updatedTime":1733412545000,"contributors":[{"name":"Emily Rodriguez","username":"","email":"ecrodriguez@mm279976-pc.lan","commits":7},{"name":"em-c-rod","username":"em-c-rod","email":"32680215+em-c-rod@users.noreply.github.com","commits":1,"url":"https://github.com/em-c-rod"},{"name":"Shivani Karikar","username":"","email":"karikarshivani@gmail.com","commits":3},{"name":"wdower","username":"wdower","email":"57142072+wdower@users.noreply.github.com","commits":1,"url":"https://github.com/wdower"},{"name":"Will Dower","username":"","email":"wdow95@hotmail.com","commits":1},{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":2},{"name":"Will","username":"Will","email":"will@dower.dev","commits":1,"url":"https://github.com/Will"},{"name":"Amndeep Singh Mann","username":"","email":"amann@mitre.org","commits":1},{"name":"George M Dias","username":"","email":"GDIAS@MITRE.ORG","commits":1}]},"readingTime":{"minutes":2.45,"words":736},"filePathRelative":"courses/advanced/02.md","autoDesc":true}`);export{f as comp,F as data};
