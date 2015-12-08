var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('style.css');
(document.head||document.documentElement).appendChild(style);

window.onload = function () {

    if (!window.codebender) {
        window.codebender = {}; 
    }   
    window.codebender.compilerflasher = { 
        staticPlugin: 'https://codebender.cc/static/plugin',
        pluginMsi: 'https://codebender.cc' + '/Codebendercc.msi',
        pluginXpi: 'https://codebender.cc' + '/codebender.xpi',
        utilitiesFlash: "https://codebender.cc/utilities/flash/ERROR_CODE",
        utilitiesCompile: "https://codebender.cc/utilities/compile/",
        bootloader: 'https://codebender.cc' + '/bootloader/',
        listBoards: "https://codebender.cc/board/listboards",
        listProgrammers: "https://codebender.cc/board/programmers",
        chromeClient: "/embed/chrome-client.js?v8",
        serialMonitorSection: "\x3Cstyle\x3E\x0A\x09\x23serial_monitor_content\x0A\x09\x7B\x0A\x09\x09display\x3A\x20none\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial_hud\x0A\x09\x7B\x0A\x09\x09overflow\x2Dy\x3A\x20scroll\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial_monitor_hud_and_autoscroll\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dchecboxes\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dchecboxes\x20\x3E\x20label\x0A\x09\x7B\x0A\x09\x09margin\x2Dbottom\x3A\x200\x3B\x0A\x09\x7D\x0A\x0A\x09\x23autoscroll_label\x0A\x09\x7B\x0A\x09\x09position\x3A\x20relative\x3B\x0A\x09\x09top\x3A\x208px\x3B\x0A\x09\x7D\x0A\x0A\x09\x23autoscroll_check\x0A\x09\x7B\x0A\x09\x09display\x3A\x20block\x3B\x0A\x09\x7D\x0A\x0A\x09\x23echo_label\x0A\x09\x7B\x0A\x09\x09position\x3A\x20relative\x3B\x0A\x09\x09top\x3A\x203px\x3B\x0A\x09\x7D\x0A\x0A\x09.serial\x2Dmonitor\x2Decho\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x09color\x3A\x20\x23FF0000\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dline\x2Dendings\x0A\x09\x7B\x0A\x09\x09width\x3A\x20130px\x3B\x0A\x09\x09margin\x2Dbottom\x3A\x2010px\x3B\x0A\x09\x7D\x0A\x3C\x2Fstyle\x3E\x0A\x0A\x3Cdiv\x20id\x3D\x22serial_monitor_content\x22\x3E\x0A\x09\x3Cdiv\x20id\x3D\x22serial_monitor_hud_and_autoscroll\x22\x3E\x0A\x09\x09\x3Cpre\x20id\x3D\x22serial_hud\x22\x20class\x3D\x22well\x22\x3E\x3C\x2Fpre\x3E\x0A\x0A\x09\x20\x20\x20\x20\x3Cspan\x20id\x3D\x22serial\x2Dchecboxes\x22\x3E\x0A\x09\x09\x20\x20\x20\x20\x3Clabel\x20id\x3D\x22autoscroll_label\x22\x20class\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20\x3Cinput\x20id\x3D\x27autoscroll_check\x27\x20type\x3D\x22checkbox\x22\x20checked\x3E\x0A\x09\x09\x09\x20\x20\x20\x20Autoscroll\x0A\x09\x09\x20\x20\x20\x20\x3C\x2Flabel\x3E\x0A\x0A\x09\x09\x20\x20\x20\x20\x3Clabel\x20id\x3D\x22echo_label\x22\x20class\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20\x3Cinput\x20id\x3D\x27echo_check\x27\x20type\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20Echo\x0A\x09\x09\x20\x20\x20\x20\x3C\x2Flabel\x3E\x0A\x09\x20\x20\x20\x20\x3C\x2Fspan\x3E\x0A\x0A\x09\x09\x3Cselect\x20id\x3D\x22serial\x2Dline\x2Dendings\x22\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nle\x22\x3ENo\x20line\x20ending\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nl\x22\x3ENewline\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22cr\x22\x3ECarriage\x20return\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nlcr\x22\x20selected\x3D\x22selected\x22\x3EBoth\x20NL\x20\x26\x20CR\x3C\x2Foption\x3E\x0A\x09\x09\x3C\x2Fselect\x3E\x0A\x09\x3C\x2Fdiv\x3E\x0A\x0A\x09\x3Cdiv\x20class\x3D\x22input\x2Dappend\x22\x3E\x0A\x09\x09\x3Cinput\x20id\x3D\x22text2send\x22\x20type\x3D\x22text\x22\x20placeholder\x3D\x22Type\x20a\x20message\x22\x20onkeydown\x3D\x22compilerflasher.pluginHandler.serialSendOnEnter\x28event\x29\x22\x3E\x0A\x09\x09\x3Cbutton\x20id\x3D\x22serial_send\x22\x20onclick\x3D\x22compilerflasher.pluginHandler.serialSend\x28\x29\x22\x20class\x3D\x22btn\x22\x20title\x3D\x22Send\x20Message\x22\x3ESend\x3C\x2Fbutton\x3E\x0A\x09\x3C\x2Fdiv\x3E\x0A\x3C\x2Fdiv\x3E\x0A"
    };

    // find text that might be arduino code
    var codeElement = $(":contains('void loop() {'):not(:has(:contains('void loop() {')))");
    var codeText = codeElement.text();

    // remove non-ascii characters
    codeText = codeText.replace(/[^\x00-\x7F]/g, " ");

    var cssString = "border:1px solid #6F95BB;border-radius:5px;";
    codeElement.css({
        border: '1px solid #6F95BB',
        borderRadius: '4px'
    });

    var displayBtn = $('<button>',{class: 'btn btn-success', text: 'Show Gistbender Options'});
    var menu = $('<div id="menu" class="hide">');
    
    displayBtn.click(function(){
        if (menu.hasClass('hide')){
            menu.slideDown(500).toggleClass('hide show');
            displayBtn.text('Hide Gistbender Options');
        } else {
            menu.slideUp(500).toggleClass('hide show');
            displayBtn.text('Show Gistbender Options');
        } 
    });

    var options = 
          "<select id='cb_cf_boards'></select>" +
          "<button class='btn btn-success' id='cb_cf_verify_btn' disabled='disabled'>" +
            "<i class='glyphicon glyphicon-ok'></i> Verify Code" +
          "</button>" +
          "<select id='cb_cf_ports' class='dropdown-select'></select>" +
          "<button class='btn btn-success' id='cb_cf_flash_btn' disabled='disabled'>" +
            "<i class='glyphicon glyphicon-arrow-right'></i> Run on Arduino" +
          "</button>" +
          "<select id='cb_cf_programmers'> </select>" +
          "<button class='btn btn-default' id='cb_cf_flash_with_prog_btn' disabled='disabled'>"+
          "<i class='glyphicon glyphicon-upload'></i> Flash w/ Programmer"+
          "</button>"+
          "<span id='#speed_label'>Speed:</span>"+
          "<select id='cb_cf_baud_rates'></select>"+
          "<button class='btn btn-default' id='cb_cf_serial_monitor_connect'>"+
              "<i class='glyphicon glyphicon-list-alt'></i> Connect"+
          "</button>"+
          "<div id='cb_cf_serial_monitor'></div>"+
          "<br>"+
          "<button class='btn btn-success' id='share_sketch'>"+
              "<i class='glyphicon glyphicon-send'></i> Share Sketch"+
          "</button>"+
          "<li id='generated_url'></li>" +
          "<div id='cb_cf_operation_output'>hello</div>";
    menu.append(options);
    codeElement.prepend('<br>');
    codeElement.prepend(menu);
    codeElement.prepend(displayBtn);

    compilerflasher = new compilerflasher(function(){
        return {"sketch.ino": codeText};
    }); 

    // send code to background.js
    chrome.runtime.sendMessage({msg: codeText});
}

var verify = function(){
    
}
