import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as l,f as d,b as s,d as k,e as i,w as t,r as p,o as c}from"./app-CuB3TegB.js";const g="/saf-training/assets/login_defs-BfFIoNHL.png",u={};function m(y,e){const r=p("CodeTabs");return c(),o("div",null,[e[4]||(e[4]=l(`<h2 id="getting-started-on-the-rhel9-baseline" tabindex="-1"><a class="header-anchor" href="#getting-started-on-the-rhel9-baseline"><span>Getting Started on the RHEL9 Baseline</span></a></h2><p>Let&#39;s practice writing a few &#39;real&#39; controls using a security guidance document.</p><h4 id="the-steps-to-write-an-inspec-control" tabindex="-1"><a class="header-anchor" href="#the-steps-to-write-an-inspec-control"><span>The Steps to write an InSpec Control</span></a></h4><ol><li><strong>Read the Control</strong> - Go to the control (you made from the stub generator) and read the check text to understand the goal of the control.</li><li><strong>Look for Key Words and Resources</strong> - Look for key words that would indicate what resource to use. If you can&#39;t find it, look at the <a href="https://docs.chef.io/inspec/resources/" target="_blank" rel="noopener noreferrer">resources page</a> and compare back to the control.</li><li><strong>Read the documentation</strong> - Look at the documentation for the resource you need and understand the syntax and check out some examples.</li><li><strong>Write the test</strong></li><li><strong>Run the test</strong></li><li><strong>Troubleshoot errors</strong> If you have syntax errors or unexpected results, it&#39;s time to troubleshoot! The best first step in troubleshooting is to <em>read the error message</em> from the command line.</li></ol><h3 id="example-control-using-login-defs-resource" tabindex="-1"><a class="header-anchor" href="#example-control-using-login-defs-resource"><span>Example Control Using <code>login_defs</code> Resource:</span></a></h3><p>Let&#39;s go through an example using control SV-230324 to see the above steps in practice.</p><ol><li><strong>Read the control</strong> - when referencing the control SV-230324 from the stub profile that was generated with the stub generator, look at the control, especially the check text, to understand the intention of the security guidance for this control.<br><strong>This control</strong> is talking about verifying all local interactive users are assigned a home directory upon creation.</li></ol><div class="language-ruby line-numbers-mode" data-highlighter="shiki" data-ext="ruby" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">control </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;SV-258043&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> do</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  title </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;All RHEL 9 local interactive user accounts must be assigned a home directory upon creation.&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  desc </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;If local interactive users are not assigned a valid home directory, there is no place for the storage and control of files they should own.&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  desc </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;check&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Verify all local interactive users on RHEL 9 are assigned a home directory upon creation with the following command:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">$ grep -i create_home /etc/login.defs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CREATE_HOME yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">If the value for &quot;CREATE_HOME&quot; parameter is not set to &quot;yes&quot;, the line is missing, or the line is commented out, this is a finding.&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  desc </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;fix&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Configure RHEL 9 to assign home directories to all new local interactive users by setting the &quot;CREATE_HOME&quot; parameter in &quot;/etc/login.defs&quot; to &quot;yes&quot; as follows.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CREATE_HOME yes&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  impact </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ref </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;DPMS Target Red Hat Enterprise Linux 9&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">check_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;C-61784r926114_chk&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">severity</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;medium&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">gid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;V-258043&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">rid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;SV-258043r991589_rule&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">stig_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;RHEL-09-411020&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">gtitle</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;SRG-OS-000480-GPOS-00227&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">fix_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;F-61708r926115_fix&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;documentable&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">cci</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;CCI-000366&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tag </span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">nist</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;CM-6 b&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">end</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>Look for Key Words and Resources</strong> - Dive more into what key words exist in the check text to determine what InSpec resources to use when writing the test. Most importantly, identify commands that are written in the check test like shown below. Find the <em>what</em> of the command. For this control, <code>sudo</code> is not the <em>what</em>. <code>grep</code> is also not the <em>what</em>. <code>create_home</code> looks like an attribute of the <code>/etc/login.defs</code> file, which looks like the <em>what</em>! Look for a resource named <code>login_defs</code> in the <a href="https://docs.chef.io/inspec/resources/" target="_blank" rel="noopener noreferrer">resource documentation</a>.</li></ol><div class="language-ruby line-numbers-mode" data-highlighter="shiki" data-ext="ruby" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  desc </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;check&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Verify all local interactive users on RHEL 9 are assigned a home directory upon creation with </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">the following command:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">$ sudo grep -i create_home /etc/login.defs</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)),d(" ![Alt text](../../assets/img/check_text.png) "),e[5]||(e[5]=s("ol",{start:"3"},[s("li",null,[s("strong",null,"Read the documentation"),i(" - Reference the syntax and examples to see if this resource is correct and how to use it."),s("br"),s("a",{href:"https://docs.chef.io/inspec/resources/login_defs/",target:"_blank",rel:"noopener noreferrer"},"login defs resource page"),s("br"),s("img",{src:g,alt:"The  Resource",loading:"lazy"})]),s("li",null,[s("strong",null,"Write the test!"),i(" - Reference the documentation to write the test. Here we add the describe block to the control below.")])],-1)),k(r,{id:"76",data:[{id:"Describe Block"},{id:"Full Control"}],"tab-id":"shell"},{title0:t(({value:a,isActive:n})=>e[0]||(e[0]=[i("Describe Block")])),title1:t(({value:a,isActive:n})=>e[1]||(e[1]=[i("Full Control")])),tab0:t(({value:a,isActive:n})=>e[2]||(e[2]=[s("div",{class:"language-ruby line-numbers-mode","data-highlighter":"shiki","data-ext":"ruby",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  describe login_defs "),s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"do")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    its"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'CREATE_HOME'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") { should eq "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'yes'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"  end")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:t(({value:a,isActive:n})=>e[3]||(e[3]=[s("div",{class:"language-ruby line-numbers-mode","data-highlighter":"shiki","data-ext":"ruby",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"control "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'SV-258043'"),s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," do")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  title "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'All RHEL 9 local interactive user accounts must be assigned a home directory upon creation.'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  desc "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'If local interactive users are not assigned a valid home directory,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"there is no place for the storage and control of files they should own.'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  desc "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'check'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'Verify all local interactive users on RHEL 9 are assigned a home directory upon creation with the following command:")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"$ grep -i create_home /etc/login.defs")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"CREATE_HOME yes")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},`If the value for "CREATE_HOME" parameter is not set to "yes", the line is missing, or the line is commented out, this is a finding.'`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  desc "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'fix'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},`'Configure RHEL 9 to assign home directories to all new local interactive users by setting the "CREATE_HOME" parameter in "/etc/login.defs" to "yes" as follows.`)]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"CREATE_HOME yes'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  impact "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"0.5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  ref "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'DPMS Target Red Hat Enterprise Linux 9'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"severity"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'medium'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"gtitle"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'SRG-OS-000480-GPOS-00227'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"gid"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'V-258043'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"rid"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'SV-258043r926116_rule'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"stig_id"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'RHEL-09-411020'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"fix_id"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 'F-61708r926115_fix'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"cci"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ["),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'CCI-000366'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#56B6C2"}},"nist"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},":"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," ["),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'CM-6 b'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'host'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  tag "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'container'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  describe login_defs "),s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"do")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"    its"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'CREATE_HOME'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") { should eq "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'yes'"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"  end")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"end")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),e[6]||(e[6]=l('<div class="hint-container info"><p class="hint-container-title">Remember the matchers</p><p>Here, the login_defs resource shows examples using the <code>includes</code> and <code>eq</code> matcher. Here, we use <code>eq</code> because we are looking for only one result from the command, not an array of items.</p></div><ol start="5"><li><strong>Run the test!</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">inspec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my_rhel9_stig_profile</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker://redhat9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li><strong>Troubleshoot errors</strong> - If you have syntax errors or unexpected results, it&#39;s time to troubleshoot. The best first step in troubleshooting is to read the error message from the command line.</li></ol><h3 id="controls-we-will-demonstrate" tabindex="-1"><a class="header-anchor" href="#controls-we-will-demonstrate"><span>Controls We Will Demonstrate</span></a></h3><table><thead><tr><th>Control</th><th>Resource Used</th></tr></thead><tbody><tr><td>SV-258043</td><td>login_defs resource</td></tr><tr><td>SV-257915</td><td>directory resource</td></tr><tr><td>SV-257929</td><td>directory looping &amp; file resource</td></tr><tr><td>SV-257936</td><td>non applicable use case &amp; package resource</td></tr></tbody></table><h3 id="suggested-level-1-controls" tabindex="-1"><a class="header-anchor" href="#suggested-level-1-controls"><span>Suggested Level 1 Controls</span></a></h3><table><thead><tr><th>Control</th><th>Resource Used</th></tr></thead><tbody><tr><td>SV-258074</td><td>login_defs resource</td></tr><tr><td>SV-257914</td><td>directory resource</td></tr><tr><td>SV-258171</td><td>directory looping &amp; file resource</td></tr><tr><td>SV-258081</td><td>non applicable use case &amp; package resource</td></tr></tbody></table><h3 id="suggested-level-2-controls" tabindex="-1"><a class="header-anchor" href="#suggested-level-2-controls"><span>Suggested Level 2 Controls</span></a></h3><table><thead><tr><th>Control</th><th>Resource Used</th></tr></thead><tbody><tr><td>SV-257824</td><td>parse config file</td></tr><tr><td>SV-258104</td><td>login_defs resource</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">Strings</p><p>Single quotes are dumb strings. Double quotes are smart strings. Smart strings means they allow <a href="http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html" target="_blank" rel="noopener noreferrer">interpolation</a>.</p></div><h3 id="suggested-inspec-resources-to-review" tabindex="-1"><a class="header-anchor" href="#suggested-inspec-resources-to-review"><span>Suggested InSpec Resources to Review</span></a></h3><ul><li><a href="https://www.inspec.io/docs/reference/resources/command/" target="_blank" rel="noopener noreferrer">command</a></li><li><a href="https://www.inspec.io/docs/reference/resources/file/" target="_blank" rel="noopener noreferrer">file</a></li><li><a href="https://www.inspec.io/docs/reference/resources/directory/" target="_blank" rel="noopener noreferrer">directory</a></li><li><a href="https://www.inspec.io/docs/reference/resources/parse_config_file/" target="_blank" rel="noopener noreferrer">parse_config_file</a></li><li><a href="https://www.inspec.io/docs/reference/resources/package/" target="_blank" rel="noopener noreferrer">package</a></li><li><a href="https://docs.chef.io/inspec/resources/login_defs/" target="_blank" rel="noopener noreferrer">login_defs</a></li></ul><h2 id="completed-rhel9-profile-for-reference" tabindex="-1"><a class="header-anchor" href="#completed-rhel9-profile-for-reference"><span>Completed RHEL9 Profile for Reference</span></a></h2><p>Below is the url to the completed RHEL9 Inspec Profile for reference, and a few things to take note of.</p><ol><li><a href="https://github.com/mitre/redhat-enterprise-linux-9-stig-baseline" target="_blank" rel="noopener noreferrer">redhat-enterprise-linux-9-stig-baseline</a></li></ol><div class="hint-container tip"><p class="hint-container-title">Key Elements in this Profile</p><ul><li>The use of <code>impact 0</code> for NA &amp; Container Aware Controls</li><li>How we make the controls <code>container aware</code>, and</li><li>The <code>fail fast</code> approach to testing execution.</li></ul></div><div class="hint-container warning"><p class="hint-container-title">Wait, does this mean that I can cheat on all of these exercises by looking up all the real controls?!</p><p>Yes. Feel free. We suggest you at least try thinking through how you&#39;d write this test code without the real baseline, though.</p></div>',18))])}const B=h(u,[["render",m]]),f=JSON.parse(`{"path":"/courses/beginner/12.html","title":"12. Put it in Practice!","lang":"en-US","frontmatter":{"order":12,"next":"13.md","title":"12. Put it in Practice!","author":"Aaron Lippold","headerDepth":3,"toc":{"levels":[2,5]},"description":"Getting Started on the RHEL9 Baseline Let's practice writing a few 'real' controls using a security guidance document. The Steps to write an InSpec Control Read the Control - Go...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. Put it in Practice!\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-11T19:29:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aaron Lippold\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/beginner/12.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"12. Put it in Practice!"}],["meta",{"property":"og:description","content":"Getting Started on the RHEL9 Baseline Let's practice writing a few 'real' controls using a security guidance document. The Steps to write an InSpec Control Read the Control - Go..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-11T19:29:10.000Z"}],["meta",{"property":"article:author","content":"Aaron Lippold"}],["meta",{"property":"article:modified_time","content":"2024-12-11T19:29:10.000Z"}]]},"git":{"createdTime":1675263385000,"updatedTime":1733945350000,"contributors":[{"name":"Emily Rodriguez","username":"","email":"ecrodriguez@mm279976-pc.lan","commits":5},{"name":"HackerShark","username":"HackerShark","email":"melsharkawi@mitre.org","commits":2,"url":"https://github.com/HackerShark"},{"name":"wdower","username":"wdower","email":"will@dower.dev","commits":5,"url":"https://github.com/wdower"},{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":2},{"name":"Shivani Karikar","username":"","email":"karikarshivani@gmail.com","commits":1},{"name":"Amndeep Singh Mann","username":"","email":"amann@mitre.org","commits":6},{"name":"p-oneil","username":"p-oneil","email":"poneil@mitre.org","commits":1,"url":"https://github.com/p-oneil"},{"name":"Will","username":"Will","email":"will@dower.dev","commits":1,"url":"https://github.com/Will"}]},"readingTime":{"minutes":3.72,"words":1117},"filePathRelative":"courses/beginner/12.md","autoDesc":true}`);export{B as comp,f as data};
