import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as n,o as i}from"./app-CvFznPXc.js";const s={};function a(r,e){return i(),o("div",null,e[0]||(e[0]=[n('<h2 id="test-kitchen-destroy-stage" tabindex="-1"><a class="header-anchor" href="#test-kitchen-destroy-stage"><span>Test Kitchen Destroy Stage</span></a></h2><p>The <code>destroy</code> stage terminates the EC2 instances, Vagrant boxes, or containers that Test Kitchen created for testing.</p><p>Occasionally, the <code>destroy</code> stage may encounter issues if the hosting platforms have altered the state of the provisioned instance during your writing, testing, or debugging sessions. If you face any problems with the <code>destroy</code> stage or any other Test Kitchen commands, verify the following:</p><ul><li>Ensure the test target&#39;s login credentials, hostname, and IP address are still accurate.</li><li>Confirm that the test instance is still running on the hosting platform.</li></ul><p>Sometimes, the solution can be as simple as checking if the instance is still active.</p><h3 id="additional-tips-for-troubleshooting" tabindex="-1"><a class="header-anchor" href="#additional-tips-for-troubleshooting"><span>Additional Tips for Troubleshooting</span></a></h3><ul><li><strong>Check Logs</strong>: Review the Test Kitchen logs for any error messages or clues about what might be going wrong.</li><li><strong>Manual Cleanup</strong>: If the <code>destroy</code> command fails, you may need to manually terminate the instances through your cloud provider&#39;s console or command-line tools.</li><li><strong>Update Configurations</strong>: Ensure that your <code>.kitchen.yml</code> configuration file is up-to-date and correctly references the instances you are trying to destroy.</li><li><strong>Network Issues</strong>: Verify that there are no network issues preventing Test Kitchen from communicating with the instances.</li></ul>',7)]))}const d=t(s,[["render",a],["__file","19.html.vue"]]),h=JSON.parse('{"path":"/courses/profile-dev-test/19.html","title":"19. Test Kitchen - Destroy","lang":"en-US","frontmatter":{"order":19,"next":"20.md","title":"19. Test Kitchen - Destroy","author":"Aaron Lippold","description":"Test Kitchen Destroy Stage The destroy stage terminates the EC2 instances, Vagrant boxes, or containers that Test Kitchen created for testing. Occasionally, the destroy stage ma...","head":[["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/profile-dev-test/19.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"19. Test Kitchen - Destroy"}],["meta",{"property":"og:description","content":"Test Kitchen Destroy Stage The destroy stage terminates the EC2 instances, Vagrant boxes, or containers that Test Kitchen created for testing. Occasionally, the destroy stage ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T06:04:07.000Z"}],["meta",{"property":"article:author","content":"Aaron Lippold"}],["meta",{"property":"article:modified_time","content":"2024-12-13T06:04:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"19. Test Kitchen - Destroy\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T06:04:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aaron Lippold\\"}]}"]]},"headers":[{"level":2,"title":"Test Kitchen Destroy Stage","slug":"test-kitchen-destroy-stage","link":"#test-kitchen-destroy-stage","children":[{"level":3,"title":"Additional Tips for Troubleshooting","slug":"additional-tips-for-troubleshooting","link":"#additional-tips-for-troubleshooting","children":[]}]}],"git":{"createdTime":1704493101000,"updatedTime":1734069847000,"contributors":[{"name":"Aaron Lippold","username":"Aaron Lippold","email":"lippold@gmail.com","commits":4,"url":"https://github.com/Aaron Lippold"},{"name":"Amndeep Singh Mann","username":"Amndeep Singh Mann","email":"amann@mitre.org","commits":1,"url":"https://github.com/Amndeep Singh Mann"}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"courses/profile-dev-test/19.md","localizedDate":"January 5, 2024","autoDesc":true}');export{d as comp,h as data};