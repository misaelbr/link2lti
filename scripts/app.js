/**
 * @author: Misael Bandeira Silveira <misaelsileveira at unisc dot br>
 * @version: 1.0
 * @date: 2022-11-08
 * @description: This script get url from input and format as a link to be used in Moodle external tool
 */

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    let link = $('input[name="link"]').val().trim();
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
      $('#resultado').text(lti);
      $('#sucesso').modal({fadeDuration: 100});
      navigator.clipboard.writeText(lti);
      $('input[name="link"]').val('');
      return;
    } else {
      $('#erro').css('display','flex');
      return;
    }
  });
});
