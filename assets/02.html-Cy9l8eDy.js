import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a,o as n}from"./app-CuB3TegB.js";const i="/saf-training/assets/fork-czIHYAhW.png",s="/saf-training/assets/creating_the_fork-Bxka8-MO.png",r="/saf-training/assets/my_fork-BgsgMFAK.png",l="/saf-training/assets/codespaces_button-zyw5984i.png",c="/saf-training/assets/codespaces_modal-Crn7C7BP.png",h="/saf-training/assets/create_codespace-CE5ZciBW.png",d="/saf-training/assets/vs_code-ZDX2d7J8.png",p="/saf-training/assets/Codespace_Stopped-4koB7bw6.png",u={};function m(g,e){return n(),o("div",null,e[0]||(e[0]=[a('<h1 id="using-codespaces-for-a-lab-environment" tabindex="-1"><a class="header-anchor" href="#using-codespaces-for-a-lab-environment"><span>Using Codespaces for a Lab Environment</span></a></h1><p>You can follow along with each exercise given in these training classes by creating a GitHub Codespace from one of the MITRE SAF team&#39;s GitHub repositories.</p><h2 id="what-is-github-codespaces" tabindex="-1"><a class="header-anchor" href="#what-is-github-codespaces"><span>What is GitHub Codespaces?</span></a></h2><p><a href="https://github.com/features/codespaces" target="_blank" rel="noopener noreferrer">Codespaces</a> is GitHub&#39;s built-in cloud-based development environment service. Creating a Codespace creates a new virtual machine in GitHub&#39;s cloud that is prepopulated with that repository&#39;s code. The user can then access a Virtual Studio window in their browser that points to this virtual machine.</p><p>Overall, Codespaces allow for a user to make a few clicks on a repository&#39;s page and get a simple way to view and edit code, with no local dependencies required, since all the compute is happening in GitHub&#39;s cloud.</p><h2 id="why-codespaces" tabindex="-1"><a class="header-anchor" href="#why-codespaces"><span>Why Codespaces?</span></a></h2><p>Using a Codespace means that we, the instructors, can know for certain what capabilities and tools are available to the students in their development environments. It allows us to standardize the lab experience. If you&#39;re formally taking our classes, we will be using this method to do the exercises. If you are taking the classes as a self-taught experience, we still recommend you create a Codespace and follow along.</p><h2 id="how-do-i-launch-a-codespace-for-my-lab-environment" tabindex="-1"><a class="header-anchor" href="#how-do-i-launch-a-codespace-for-my-lab-environment"><span>How do I launch a Codespace for my lab environment?</span></a></h2><p>You&#39;ll need to create a fork of the <a href="https://github.com/mitre/saf-training-lab-environment" target="_blank" rel="noopener noreferrer">SAF training lab environment repository</a>. That repository contains all the install scripts and sample code you will need for the User, Beginner, and Advanced classes.</p><h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h3><ol><li>Log into <a href="http://github.com" target="_blank" rel="noopener noreferrer">github.com</a>. If you do not have one already, you&#39;ll need to create a <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">GitHub account</a>. You need to do this so that you can create your &quot;own&quot; copy of the lab environment repository by forking it.</li><li>Access the <a href="https://github.com/mitre/saf-training-lab-environment" target="_blank" rel="noopener noreferrer">lab environment repository</a>.</li><li>Click the <strong>fork</strong> button:<br><img src="'+i+'" alt="Forking a Repo" loading="lazy"><br> You&#39;ll be taken to the fork creation screen. Make sure you select the option to create the fork under your own profile, and not under an organizational account (if you are part of one). You may leave &quot;Copy the <code>main</code> branch only&quot; checked if it is enabled, but this selection is optional.<br><img src="'+s+'" alt="Fork Menu" loading="lazy"></li><li>You&#39;ll be taken to the new webpage for your fork. Note that it is a complete copy of the original MITRE-managed codebase, but you are now the owner.<br><img src="'+r+'" alt="My Fork" loading="lazy"></li><li>Click the Code button to bring up the Codespaces modal (by default you might see a set of options for downloading the code <em>locally</em>, make sure you select the &quot;codespace&quot; tab on this modal).<br><img src="'+l+'" alt="Code Button" loading="lazy"><br><img src="'+c+'" alt="Codespaces Modal" loading="lazy"></li><li>Click the &#39;+&#39; to create a new codespace on the main branch of your forked repository. Note that if you leave your Codespace tab and return to this page, you will find a link to any existing virtual machines.<br> You can click on the ellipses next to the &#39;+&#39; if you want to customize the VM running the Codespace, but none of the class exercises require anything more than a very basic 2-core machine.<br><img src="'+h+'" alt="Create a Codespace" loading="lazy"><br> You will immediately be taken to a new tab, which will load a Virtual Studio Code window pointing to your shiny new VM running in GitHub&#39;s cloud.<br><img src="'+d+'" alt="Your Editing Window" loading="lazy"></li><li>The MITRE SAF team has included a script in this repository (<code>build-lab.sh</code>) that you can use to easily install all the tools we will be using for the classes. It installs:</li></ol><ul><li>InSpec</li><li>Ansible</li><li>The SAF CLI</li><li>Helpful extensions for VSCode to handle Ruby code (and therefore InSpec code)</li><li>A UBI8 and a NGINX container for practicing running Ansible and InSpec</li></ul><p>Once you have launched your codespace and your browser connects to it, run:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./build-lab.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>to execute the install script.</p><p>You can always re-run this script if one of your dependencies runs into a problem (for instance, if your containers go down because the Codespace automatically turned off to save resources). You could also run <code>source ./test-lab.sh</code> to do a quick spot check that InSpec, the SAF CLI, and your containers are present.</p><h3 id="your-lab-environment-after-the-class" tabindex="-1"><a class="header-anchor" href="#your-lab-environment-after-the-class"><span>Your Lab Environment After the Class</span></a></h3><p>We suggest you fork the lab environment because it gives you ownership over the code you will write for these classes. If you use the <code>git</code> utility to commit your changes inside the Codespace, you will be committing to your own fork, which you own. Feel free to play around with the tools we will introduce you to inside your codespace; it&#39;s yours.</p><p>NOTE that Codespaces are eventually turned off by GitHub if you do not use them for long enough -- if you ever want to refer back to what you did in these classes, be sure to not just commit your code with <code>git commit</code>, but push it back to the upstream repository with <code>git push</code>!</p><h2 id="faqs" tabindex="-1"><a class="header-anchor" href="#faqs"><span>FAQs</span></a></h2><details class="hint-container details"><summary>1. My Codespace is stopped! What do I do?</summary><p>This is normal. Your codespace will timeout after some period of inactivity. When you restart, it will be in the same state as you left it. Just click the &quot;Restart codespace&quot; button.<br><img src="'+p+'" alt="Alt text" loading="lazy"></p></details><details class="hint-container details"><summary>2. How long can I use Codespaces for free?</summary><p>Go to the &quot;Codespaces&quot; tab on the top menu of your GitHub page while logged into GitHub to see your list Codespaces. Here you will see all the Codespaces you have, who owns them (for example, you may own it or your organization may own it). For personally owned Codespaces, you receive 120 free core hours per month. This means that you can have one 2-core Codepace active for 60 hours in one month.<br> Reference <a href="https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces" target="_blank" rel="noopener noreferrer">GitHub&#39;s documentation</a> for more information.</p></details><details class="hint-container details"><summary>3. How do I get back to my Codespaces?</summary><p>This site&#39;s hompage has a link to &quot;Go to the development lab&quot;. <a href="https://github.com/mitre/saf-training-lab-environment" target="_blank" rel="noopener noreferrer">Here</a> is that link again. Read through the README on that page for up to date instructions regarding the Codespace development lab for these classes.</p></details>',23)]))}const y=t(u,[["render",m]]),w=JSON.parse(`{"path":"/resources/02.html","title":"Training Lab Environments","lang":"en-US","frontmatter":{"index":true,"icon":"page","title":"Training Lab Environments","author":"Will Dower","headerDepth":3,"toc":{"levels":[2,5]},"description":"Using Codespaces for a Lab Environment You can follow along with each exercise given in these training classes by creating a GitHub Codespace from one of the MITRE SAF team's Gi...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Training Lab Environments\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-03T20:27:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Will Dower\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/resources/02.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"Training Lab Environments"}],["meta",{"property":"og:description","content":"Using Codespaces for a Lab Environment You can follow along with each exercise given in these training classes by creating a GitHub Codespace from one of the MITRE SAF team's Gi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-03T20:27:05.000Z"}],["meta",{"property":"article:author","content":"Will Dower"}],["meta",{"property":"article:modified_time","content":"2024-12-03T20:27:05.000Z"}]]},"git":{"createdTime":1663964269000,"updatedTime":1733257625000,"contributors":[{"name":"Emily Rodriguez","username":"","email":"ecrodriguez@mm279976-pc.lan","commits":2},{"name":"wdower","username":"wdower","email":"will@dower.dev","commits":2,"url":"https://github.com/wdower"},{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":1},{"name":"p-oneil","username":"p-oneil","email":"poneil@mitre.org","commits":1,"url":"https://github.com/p-oneil"}]},"readingTime":{"minutes":3.47,"words":1040},"filePathRelative":"resources/02.md","autoDesc":true}`);export{y as comp,w as data};
