import{_ as s}from"./TestDrivenDevelopment-BPnOXm-o.js";import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as n,b as i,f as t,d as a,e as r,r as m,o as d}from"./app-CvFznPXc.js";const h="/saf-training/assets/SAF_Capabilities_Validate-DEafjabG.png",c="/saf-training/assets/Github_nginx-CQ8Utu5N.png",u={},f={class:"hint-container note"};function g(w,e){const o=m("RouteLink");return d(),p("div",null,[e[10]||(e[10]=n('<h2 id="_5-1-from-plan-to-validate" tabindex="-1"><a class="header-anchor" href="#_5-1-from-plan-to-validate"><span>5.1 From &quot;Plan&quot; to &quot;Validate&quot;</span></a></h2><p>After identifying software components for your environment and knowing what security guidance exists for those components, the next step is validation, or in other words, testing.</p><figure><img src="'+h+'" alt="The Validation Capability" tabindex="0" loading="lazy"><figcaption>The Validation Capability</figcaption></figure><div class="hint-container info"><p class="hint-container-title">WAIT!</p><p>But what about the &quot;Harden&quot; pillar? Why would we focus on testing that a software component is secure before we secure it?</p><p>Actually, starting with the tests, rather than the changes to be tested, can level-set the expectations and see what the current state of the software is while giving a clear understanding of the goal or measurement of success.</p><p>When using this mindset in software development, this kind of development can be referred to as Test Driven Development.</p></div><details class="hint-container details"><summary>A note on Test Driven Development (TDD)</summary><p>The idea of using Test Driven Development (TDD), where the code is driven by tests and therefore the requirements, helps confirm that the software does exactly what it is supposed to do - not more and not less.</p><p>This process starts with a FAILING test. Then, the minimal amount of change required is done to fix the code so that the test passes. Once the test passes, the code can be refactored to be cleaner, more readable, etc. This is a cycle and returns to the top to create a new failing test. As development continues, all tests should be run to confirm that all tests still pass. These tests can be put in an automated suite to validate the code set whenever there are changes overall.</p><p>The SAF team values this methodology and helps teams implement security compliance tests using InSpec so they can understand the state of the system and the goal state of a secured system, using automated tests to get this information easier, quicker, and more often.<br><img src="'+s+'" alt="Test-Driven Development" loading="lazy"></p></details><h2 id="_5-2-what-is-inspec" tabindex="-1"><a class="header-anchor" href="#_5-2-what-is-inspec"><span>5.2 What is InSpec?</span></a></h2><p>&quot;Chef <a href="https://www.chef.io/downloads/tools/inspec" target="_blank" rel="noopener noreferrer">InSpec</a> is an infrastructure security and compliance testing framework with a human- and machine-readable language for comparing actual versus desired system state.&quot;</p><p>The SAF uses InSpec profiles to test software components against a security baseline. These automated tests produce data showing what security controls passed, failed, were skipped, or were not reviewed, and provide reasons and more information to fix issues if they are not passing.</p>',8)),i("div",f,[e[9]||(e[9]=i("p",{class:"hint-container-title"},"What is an InSpec profile?",-1)),i("p",null,[e[2]||(e[2]=t("The term ")),e[3]||(e[3]=i("strong",null,"InSpec profile",-1)),e[4]||(e[4]=t(" refers to a collection of security tests written in InSpec (the programming language).")),e[5]||(e[5]=i("br",null,null,-1)),e[6]||(e[6]=t(" To learn more, look at the Beginner Developer's section on ")),a(o,{to:"/courses/beginner/02.html#what-is-an-inspec-profile"},{default:r(()=>e[0]||(e[0]=[t("What is an InSpec Profile")])),_:1}),e[7]||(e[7]=t(" and test your understanding in ")),a(o,{to:"/courses/beginner/02.html#check-in"},{default:r(()=>e[1]||(e[1]=[t("this comprehension check")])),_:1}),e[8]||(e[8]=t("."))])]),e[11]||(e[11]=n('<h2 id="_5-3-examples-of-inspec-profiles" tabindex="-1"><a class="header-anchor" href="#_5-3-examples-of-inspec-profiles"><span>5.3 Examples of InSpec profiles</span></a></h2><p>Let&#39;s review the READMEs for each profile for more information and specific run instructions. The README is the first document in the GitHub repository and contains the following information:</p><ol><li>The name of the profile</li><li>The security guidance that the profile is based on (e.g., a DISA STIG)</li><li>Available inputs for tailoring to your environment</li><li>Instructions for running the profile</li></ol><p>Take a look at the <a href="https://github.com/mitre/redhat-enterprise-linux-9-stig-baseline" target="_blank" rel="noopener noreferrer">RHEL9 baseline profile</a> or the <a href="https://github.com/mitre/nginx-stigready-baseline" target="_blank" rel="noopener noreferrer">NGINX baseline profile</a> for full examples. You can find InSpec profiles written by the MITRE SAF team through the <a href="https://saf.mitre.org/libs/validate" target="_blank" rel="noopener noreferrer">validation library of the SAF site</a>.</p><figure><img src="'+c+'" alt="The NGINX Profile" tabindex="0" loading="lazy"><figcaption>The NGINX Profile</figcaption></figure>',5))])}const T=l(u,[["render",g],["__file","05.html.vue"]]),x=JSON.parse('{"path":"/courses/user/05.html","title":"5. Validation with InSpec Profiles","lang":"en-US","frontmatter":{"order":5,"next":"06.md","title":"5. Validation with InSpec Profiles","author":"Aaron Lippold","headerDepth":3,"description":"5.1 From \\"Plan\\" to \\"Validate\\" After identifying software components for your environment and knowing what security guidance exists for those components, the next step is validat...","head":[["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/user/05.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"5. Validation with InSpec Profiles"}],["meta",{"property":"og:description","content":"5.1 From \\"Plan\\" to \\"Validate\\" After identifying software components for your environment and knowing what security guidance exists for those components, the next step is validat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-09T16:39:22.000Z"}],["meta",{"property":"article:author","content":"Aaron Lippold"}],["meta",{"property":"article:modified_time","content":"2024-12-09T16:39:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5. Validation with InSpec Profiles\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-09T16:39:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aaron Lippold\\"}]}"]]},"headers":[{"level":2,"title":"5.1 From \\"Plan\\" to \\"Validate\\"","slug":"_5-1-from-plan-to-validate","link":"#_5-1-from-plan-to-validate","children":[]},{"level":2,"title":"5.2 What is InSpec?","slug":"_5-2-what-is-inspec","link":"#_5-2-what-is-inspec","children":[]},{"level":2,"title":"5.3 Examples of InSpec profiles","slug":"_5-3-examples-of-inspec-profiles","link":"#_5-3-examples-of-inspec-profiles","children":[]}],"git":{"createdTime":1656525471000,"updatedTime":1733762362000,"contributors":[{"name":"Emily Rodriguez","username":"Emily Rodriguez","email":"ecrodriguez@mm279976-pc.lan","commits":9,"url":"https://github.com/Emily Rodriguez"},{"name":"Emily Rodriguez","username":"Emily Rodriguez","email":"ecrodriguez@mitre.org","commits":2,"url":"https://github.com/Emily Rodriguez"},{"name":"wdower","username":"wdower","email":"will@dower.dev","commits":3,"url":"https://github.com/wdower"},{"name":"Aaron Lippold","username":"Aaron Lippold","email":"lippold@gmail.com","commits":2,"url":"https://github.com/Aaron Lippold"},{"name":"Shivani Karikar","username":"Shivani Karikar","email":"karikarshivani@gmail.com","commits":1,"url":"https://github.com/Shivani Karikar"},{"name":"Will","username":"Will","email":"will@dower.dev","commits":1,"url":"https://github.com/Will"},{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":1,"url":"https://github.com/dependabot[bot]"},{"name":"p-oneil","username":"p-oneil","email":"poneil@mitre.org","commits":1,"url":"https://github.com/p-oneil"}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"courses/user/05.md","localizedDate":"June 29, 2022","autoDesc":true}');export{T as comp,x as data};