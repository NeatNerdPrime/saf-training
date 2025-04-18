import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as n}from"./app-CuB3TegB.js";const s={};function r(o,e){return n(),a("div",null,e[0]||(e[0]=[i('<h2 id="learning-objectives" tabindex="-1"><a class="header-anchor" href="#learning-objectives"><span>Learning Objectives</span></a></h2><ul><li>Understand what constitutes a patch update</li><li>Learn the complete patch update workflow</li><li>Master the testing and validation process</li></ul><h2 id="what-is-a-patch-update" tabindex="-1"><a class="header-anchor" href="#what-is-a-patch-update"><span>What is a Patch Update?</span></a></h2><p>A patch update is a minor modification to an InSpec profile that addresses specific issues, bugs, or improvements without changing core functionality. Common examples include:</p><ul><li>Fixing control logic errors</li><li>Updating threshold values</li><li>Improving error handling</li><li>Adding missing test cases</li></ul><h2 id="step-by-step-patch-update-process" tabindex="-1"><a class="header-anchor" href="#step-by-step-patch-update-process"><span>Step-by-Step Patch Update Process</span></a></h2><h3 id="_1-issue-documentation" tabindex="-1"><a class="header-anchor" href="#_1-issue-documentation"><span>1. Issue Documentation</span></a></h3><ul><li>Create a detailed issue in the project repository</li><li>Include specific examples of the problem</li><li>Reference any related documentation</li><li>Link: <a href="https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline/issues" target="_blank" rel="noopener noreferrer">Project Issues Page</a></li></ul><h3 id="_2-environment-setup" tabindex="-1"><a class="header-anchor" href="#_2-environment-setup"><span>2. Environment Setup</span></a></h3><ul><li>Fork the repository</li><li>Create a branch from the target patch release tag</li><li>Configure test environments: <ul><li>AWS testing suite</li><li>Docker testing suite</li></ul></li></ul><h3 id="_3-implementation" tabindex="-1"><a class="header-anchor" href="#_3-implementation"><span>3. Implementation</span></a></h3><ul><li>Make necessary updates to: <ul><li>Control logic</li><li><code>inspec.yml</code> inputs</li><li>Threshold values</li></ul></li></ul><div class="hint-container note"><p class="hint-container-title">Version number increments</p><p>The version attribute in <code>inspec.yml</code> is managed during releases so you shouldn&#39;t change it in every merged branch, just when you cut a new release.</p></div><h3 id="_4-testing-protocol" tabindex="-1"><a class="header-anchor" href="#_4-testing-protocol"><span>4. Testing Protocol</span></a></h3><p>Verify your changes across multiple environments:</p><ul><li>Vanilla systems</li><li>Hardened systems</li><li>Known bad states</li><li>Known good states</li><li>Edge cases and error conditions</li></ul><p>Test contexts to cover:</p><ul><li>Container environments</li><li>Virtual machines</li><li>Physical hardware (1U machines)</li></ul><h3 id="_5-quality-assurance" tabindex="-1"><a class="header-anchor" href="#_5-quality-assurance"><span>5. Quality Assurance</span></a></h3><p>Run the provided linting tools:</p><ul><li><code>bundle exec rake lint</code></li><li><code>bundle exec rake lint:autocorrect</code></li></ul><h3 id="_6-commit-and-pr" tabindex="-1"><a class="header-anchor" href="#_6-commit-and-pr"><span>6. Commit and PR</span></a></h3><ul><li>Commit your updates with a message including <code>Fixes #ISSUE</code></li><li>Open a PR from your fork to the project repository</li></ul><h3 id="_7-test-suite-verification" tabindex="-1"><a class="header-anchor" href="#_7-test-suite-verification"><span>7. Test Suite Verification</span></a></h3><ul><li>Ensure the GitHub Action test suite passes</li><li>Link: <a href="https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline/actions" target="_blank" rel="noopener noreferrer">Project Actions Page</a></li></ul>',25)]))}const p=t(s,[["render",r]]),d=JSON.parse('{"path":"/courses/profile-dev-test/12.html","title":"12. Understanding Profile Patch Updates","lang":"en-US","frontmatter":{"order":12,"next":"13.md","title":"12. Understanding Profile Patch Updates","author":"Aaron Lippold","description":"Learning Objectives Understand what constitutes a patch update Learn the complete patch update workflow Master the testing and validation process What is a Patch Update? A patch...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. Understanding Profile Patch Updates\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T18:08:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aaron Lippold\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/profile-dev-test/12.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"12. Understanding Profile Patch Updates"}],["meta",{"property":"og:description","content":"Learning Objectives Understand what constitutes a patch update Learn the complete patch update workflow Master the testing and validation process What is a Patch Update? A patch..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-12T18:08:49.000Z"}],["meta",{"property":"article:author","content":"Aaron Lippold"}],["meta",{"property":"article:modified_time","content":"2024-12-12T18:08:49.000Z"}]]},"git":{"createdTime":1704493101000,"updatedTime":1734026929000,"contributors":[{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":4},{"name":"Amndeep Singh Mann","username":"","email":"amann@mitre.org","commits":1}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"courses/profile-dev-test/12.md","autoDesc":true}');export{p as comp,d as data};
