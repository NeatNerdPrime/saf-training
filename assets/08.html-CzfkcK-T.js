import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,b as t,f as i,d as r,e as l,r as c,o as h}from"./app-CvFznPXc.js";const u="/saf-training/assets/view_related_rules-BCQoCDek.png",d="/saf-training/assets/related_rules-BrMKRSsr.png",p="/saf-training/assets/copying_existing_content-DjE61NWo.png",m="/saf-training/assets/check_and_fix_updated-cBamkzQT.png",f="/saf-training/assets/srgcontents-gnLeMqx2.png",g={},y={class:"footnotes"},w={class:"footnotes-list"},x={id:"footnote1",class:"footnote-item"};function k(b,e){const n=c("RouteLink");return h(),a("div",null,[e[4]||(e[4]=s(`<h2 id="_8-1-check-and-fix" tabindex="-1"><a class="header-anchor" href="#_8-1-check-and-fix"><span>8.1 Check and Fix</span></a></h2><p>Let&#39;s go back to our requirement for earlier that we said was &quot;Applicable - Configurable.&quot; It&#39;s time to fill it out completely.</p><p>The Check and Fix fields are the ones that acually tell the user:</p><ol><li>How to determine if a piece of software is compliant with the requirement, and</li><li>How to bring it into compliance if it isn&#39;t already.</li></ol><p>As such, these fields represent the bulk of what you will need to research and modify when constructing your security guidance.</p><p>DISA requires that STIG authors use very specific language for these sections. Again, we will leverage the official guidance<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> for instructions.</p><h2 id="_8-2-check" tabindex="-1"><a class="header-anchor" href="#_8-2-check"><span>8.2 Check</span></a></h2><p>Per the Vendor STIG Process Guide section 4.1.11 -</p><p>&quot;The Check is used to provide specific instruction on how to validate product configuration settings. It must include any information and procedures necessary for validating the configured value.</p><p>The Check should also state:</p><ul><li>What system privileges, if any, are necessary to perform the check.</li><li>Whether the check procedure requires local access or can be performed remotely.</li><li>Whether performing the check impacts system reliability or availability.</li></ul><p>If the vendor is leveraging third-party tools to satisfy a requirement, identify in the Check the product and the specific steps to check compliance.</p><p>If the product is expected to be compatible with a number of third-party tools, include in the Check general instructions that would enable a systems administrator with reasonable familiarity with the third-party tool to perform the necessary procedure.</p><p>For example, if the requirement is to block certain TCP ports on a firewall, a general instruction to this effect may suffice.<br> &quot;</p><h3 id="_8-2-1-check-writing-style" tabindex="-1"><a class="header-anchor" href="#_8-2-1-check-writing-style"><span>8.2.1 Check Writing Style</span></a></h3><p>&quot;Write the Check so the user can easily follow the steps to assess and determine compliance.</p><ul><li>If the check procedure is not applicable for a specific condition, state that at the top of the Check. (Refer to “Check text example” below.)</li><li>Do not restate the requirement in the Check.</li><li>Do not include steps to alter values or settings.</li><li>Do not use words such as “should,” shall,” or “please.”</li><li>Use action verbs such as “verify,” “navigate,” “identify,” “type,” “obtain,” etc.</li><li>Give exact steps to test compliance with the requirement.</li><li>For checks that require a sequence of actions, use numbered steps as shown below: <ol><li>Log on to…</li><li>Open the…</li><li>Click….</li><li>Determine…</li></ol></li><li>Include a “finding” statement written as: “If….this is a finding”.</li></ul><p><strong>Check text example:</strong></p><pre><code>If Bluetooth connectivity is required to facilitate use of approved external devices, this is not applicable.

To determine if any hardware components for Bluetooth are loaded in the system, run the following command:

# sudo kextstat | grep -i Bluetooth

If a result is returned, this is a finding.

In some cases, determining when an item is NOT a finding might be appropriate.
</code></pre><p><strong>Check text example:</strong></p><pre><code>If the &quot;xyz&quot; parameter is set to &quot;5&quot;, this is not a finding.

When using a command to inspect the status of a host, listing example output can be helpful. The output must comply with STIG requirements unless an example of a failure is needed and is clearly explained.
</code></pre><p><strong>Check text example:</strong></p><pre><code>Find the file systems that contain the directories being exported with the following command:

# cat /etc/fstab | grep nfs
UUID=e06097bb-cfcd-437b-9e4d-a691f5662a7d    /store        nfs        rw,nosuid     0 0

If a file system found in &quot;/etc/fstab&quot; refers to NFS and does not have the &quot;nosuid&quot; option set, this is a finding.
</code></pre><p>&quot;</p><div class="hint-container note"><p class="hint-container-title">The Finding Statement</p><p>We want to call out the Finding statement as particularly important. STIG content must be very clear on when exactly a misconfiguration becomes a <strong>finding,</strong> or non-compliance with the requirement.</p><p>Recall that a STIG is intended to be something that can be followed by someone who is not an expert in the system at hand; recall also that we want to eventually automate these checks, and as such we want to make it easier for us as well!</p></div><h2 id="_8-3-fix" tabindex="-1"><a class="header-anchor" href="#_8-3-fix"><span>8.3 Fix</span></a></h2><p>Per the Vendor STIG Process Guide section 4.1.11 -</p><p>&quot;The Fix is used to provide specific instructions on how to configure the product to comply with the requirement.</p><p>After steps in the Fix text are implemented, the resulting system state should be the same no matter how many times the instructions are followed.&quot;</p><h2 id="_8-3-1-fix-writing-style" tabindex="-1"><a class="header-anchor" href="#_8-3-1-fix-writing-style"><span>8.3.1 Fix Writing Style</span></a></h2><p>&quot;When writing the Fix content, the vendor must include all steps needed to configure the product to comply with the requirement.</p><ul><li>Do not use general language. When writing the criteria statement in the Fix text, be specific. Use the exact steps to take to bring the product into compliance with the requirement.</li><li>Do not restate the requirement in the Fix.</li><li>In the Fix procedures, do not use such words as “should,” shall,” or “please.”</li><li>Use action verbs such as “ensure,” “configure,” “set,” “select,” etc.</li><li>For Fix procedures that require a sequence of actions, use numbered steps as shown below: <ol><li>Log on to…</li><li>Open the…</li><li>Click the….</li><li>Ensure…</li></ol></li><li>Do not include a finding statement in the Fix.<br> &quot;</li></ul><h2 id="_8-4-completing-our-requirement" tabindex="-1"><a class="header-anchor" href="#_8-4-completing-our-requirement"><span>8.4 Completing Our Requirement</span></a></h2><p>Let&#39;s go back and try this for requirement RHEL-09-000003. Right now, the requirement is only populated by the original SRG text. We need to tailor this to RHEL9.</p><h3 id="_8-4-1-using-other-stigs-as-reference" tabindex="-1"><a class="header-anchor" href="#_8-4-1-using-other-stigs-as-reference"><span>8.4.1 Using Other STIGs as Reference</span></a></h3><p>Remember that STIG writing is an open-book test. We encourage authors to go back and take a look at how other authors filled out their requirements for similar systems. In fact, the best place to look for reference is usually in a prior major version of the same software. That is, the best place to start for security guidance for RHEL9 is to <em>see what they did for other RHEL versions!</em></p><p>Luckily, Vulcan has access to every STIG and SRG you have uploaded to the instance for cross-referencing.</p><p>Click on the RHEL-09-000004 requirement again and click on the &quot;View Related Rules&quot; button on the right-hand side.</p><figure><img src="`+u+'" alt="Related Rules Button" tabindex="0" loading="lazy"><figcaption>Related Rules Button</figcaption></figure><p>You&#39;ll see a view of every requirement Vulcan can find in its content library that also refers back to the same SRG ID.</p><figure><img src="'+d+'" alt="Related Rules" tabindex="0" loading="lazy"><figcaption>Related Rules</figcaption></figure><p>You can filter and search through this library for keywords if you like, or even restrict the results to only show content your team has written inside this Vulcan instance&#39;s Components. For now, though, we are likely interested only in the published STIGs.</p><p>Let&#39;s take a look at some of these RHEL8 STIG requirements. They seem promising. We can even copy them directly into the Check and Fix fields on our RHEL9 STIG requirement if we want to! Let&#39;s do that now.</p><figure><img src="'+p+'" alt="Copying Existing Content" tabindex="0" loading="lazy"><figcaption>Copying Existing Content</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The real, published RHEL9 STIG is uploaded to the Vulcan instance we use to teach these classes. If you use the View Related Content feature, Vulcan will show you the &quot;real&quot; answer! For the purposes of this exercise, though, we will use an earlier version of RHEL.</p></div><p>Great! Now we have a Check and Fix field that actually have content. Note also that this content is already following STIG syntax; the commands are very direct, and the line on what counts as a finding is clearly drawn.</p><figure><img src="'+m+'" alt="Updated Check and Fix Text" tabindex="0" loading="lazy"><figcaption>Updated Check and Fix Text</figcaption></figure><p>Save the requirement.</p><div class="hint-container warning"><p class="hint-container-title">Is It Always This Easy?</p><p>Prior STIGs are always an excellent <em>starting point,</em> but new STIG content does require research and testing to ensure that guidance from the prior STIGs is still accurate for our current Component.</p></div><p>Note that the check text and the fix text that we have copied into our requirement show all the signs of good STIG writing form. They are very specific instructions -- the Check text tells the reader exactly what attribute to look for and in what file, and uses the key phrase <em>this is a finding</em> to tell us explicitly what counts as a misconfiguration. The Fix text, meanwhile, tells us exactly which file to modify and exactly what content to add to a file.</p><div class="hint-container note"><p class="hint-container-title">The Original SRG content</p><p>If you scroll down in the requirement window, you can expand out the original SRG content from which this STIG requirement was sourced. This can be useful to reference if you want to make sure your Check and Fix are still addressing the SRG requirement.</p><figure><img src="'+f+'" alt="Original SRG content" tabindex="0" loading="lazy"><figcaption>Original SRG content</figcaption></figure></div><p>We have now completed the tailoring of this requirement from the SRG to the STIG level. Feel free to select a few more requirements from the list and conduct the tailoring process again. This might give you a better idea of what sorts of requirements you can run into when undergoing an SRG tailoring process.</p><hr class="footnotes-sep">',53)),t("section",y,[t("ol",w,[t("li",x,[t("p",null,[e[1]||(e[1]=i('Sections 4.1.11 and 4.1.13 of the "Vendor STIG Process", Version 4 Release 1. See ')),r(n,{to:"/resources/"},{default:l(()=>e[0]||(e[0]=[i("Resources")])),_:1}),e[2]||(e[2]=i(". ")),e[3]||(e[3]=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1))])])])])])}const _=o(g,[["render",k],["__file","08.html.vue"]]),T=JSON.parse(`{"path":"/courses/guidance/08.html","title":"8. Check and Fix","lang":"en-US","frontmatter":{"order":8,"next":"09.md","title":"8. Check and Fix","author":"Will Dower","headerDepth":3,"description":"8.1 Check and Fix Let's go back to our requirement for earlier that we said was \\"Applicable - Configurable.\\" It's time to fill it out completely. The Check and Fix fields are th...","head":[["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/guidance/08.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"8. Check and Fix"}],["meta",{"property":"og:description","content":"8.1 Check and Fix Let's go back to our requirement for earlier that we said was \\"Applicable - Configurable.\\" It's time to fill it out completely. The Check and Fix fields are th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T03:46:43.000Z"}],["meta",{"property":"article:author","content":"Will Dower"}],["meta",{"property":"article:modified_time","content":"2024-12-02T03:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8. Check and Fix\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T03:46:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Will Dower\\"}]}"]]},"headers":[{"level":2,"title":"8.1 Check and Fix","slug":"_8-1-check-and-fix","link":"#_8-1-check-and-fix","children":[]},{"level":2,"title":"8.2 Check","slug":"_8-2-check","link":"#_8-2-check","children":[{"level":3,"title":"8.2.1 Check Writing Style","slug":"_8-2-1-check-writing-style","link":"#_8-2-1-check-writing-style","children":[]}]},{"level":2,"title":"8.3 Fix","slug":"_8-3-fix","link":"#_8-3-fix","children":[]},{"level":2,"title":"8.3.1 Fix Writing Style","slug":"_8-3-1-fix-writing-style","link":"#_8-3-1-fix-writing-style","children":[]},{"level":2,"title":"8.4 Completing Our Requirement","slug":"_8-4-completing-our-requirement","link":"#_8-4-completing-our-requirement","children":[{"level":3,"title":"8.4.1 Using Other STIGs as Reference","slug":"_8-4-1-using-other-stigs-as-reference","link":"#_8-4-1-using-other-stigs-as-reference","children":[]}]}],"git":{"createdTime":1698171733000,"updatedTime":1733111203000,"contributors":[{"name":"wdower","username":"wdower","email":"57142072+wdower@users.noreply.github.com","commits":3,"url":"https://github.com/wdower"},{"name":"ssayed118","username":"ssayed118","email":"sumaasayed@mitre.org","commits":1,"url":"https://github.com/ssayed118"},{"name":"sumaa","username":"sumaa","email":"79539195+ssayed118@users.noreply.github.com","commits":1,"url":"https://github.com/sumaa"},{"name":"Emily Rodriguez","username":"Emily Rodriguez","email":"ecrodriguez@mitre.org","commits":5,"url":"https://github.com/Emily Rodriguez"},{"name":"Aaron Lippold","username":"Aaron Lippold","email":"lippold@gmail.com","commits":3,"url":"https://github.com/Aaron Lippold"}]},"readingTime":{"minutes":4.89,"words":1467},"filePathRelative":"courses/guidance/08.md","localizedDate":"October 24, 2023","autoDesc":true}`);export{_ as comp,T as data};