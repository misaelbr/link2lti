/**
 * @author: Misael Bandeira Silveira <misaelsileveira at unisc dot br>
 * @version: 1.0
 * @date: 2022-11-08
 * @description: This script get url from input and format as a link to be used in Moodle external tool
 */

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    let link = $('input[name="link"]').val();
    console.log(link);
    var re = new RegExp(
      '^https:\\/\\/biblioteca-a.read.garden\\/viewer\\/([0-9]+)\\/?.*$',
      'gm',
    );
    var match = re.exec(link);

    console.log(match);
    if (match !== null) {
      let lti = `https://bibliotecaa.grupoa.com.br/lti/launch.php?bookid=${match[1]}`;
      $('#erro').hide();
      $('#retorno').css('display','flex').css('flex-direction','column').css('align-items','center').css('justify-content','center');
      $('#resultado').text(lti).css('display','flex');
      navigator.clipboard.writeText(lti);
      return;
    } else {
      $('#retorno').hide();
      $('#erro').css('display','flex');
      return;
    }
  });
});
