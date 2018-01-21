  var toggler = '.navbar-toggle';
  var pagewrapper = '#page-content';
  var navigationwrapper = '.navbar-header';
  var menuwidth = '100%';
  var slidewidth = '80%';
  var menuneg = '-100%';
  var slideneg = '-80%';

  $('#slide-nav').on('click', toggler, function(e) {
    var selected = $(this).hasClass('slide-active');

    $('#slidemenu').stop().animate({
      left: selected ? menuneg : '0px',
    });

    $('#navbar-height-col').stop().animate({
      left: selected ? slideneg : '0px',
    });

    $(pagewrapper).stop().animate({
      left: selected ? '0px' : slidewidth,
    });

    $(navigationwrapper).stop().animate({
      left: selected ? '0px' : slidewidth,
    });

    $(this).toggleClass('slide-active', !selected);
    $('#slidemenu').toggleClass('slide-active');

    $('#page-content, .navbar, body, .navbar-header').toggleClass(
      'slide-active'
    );
  });

  var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';

  $(window).on('resize', function() {
    if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
      $(selected).removeClass('slide-active');
    }
  });

  $('.mail-submit').bind('click', function() {
    var validated = true;
    var contact = $('#contact').val();
    var selected = $('#options').val();
    var msg = $('#msg').val();
    //console.log(contact, selected, msg);

    $('#res-fail').css({ display: 'none' });
    $('#res-success').css({ display: 'none' });
    $('.msg-board').empty();

    if (contact.length < 8) {
      $('.msg-board').css({ display: 'block' });
      $('.msg-board').append(
        '<h5 class="text-danger"><i class="fa fa-bell-o fa-1x hy-color"></i> Please enter' +
          ' proper contact info.</h5>'
      );
      validated = false;
    }

    if (selected.length < 1) {
      $('.msg-board').css({ display: 'block' });
      $('.msg-board').append(
        '<h5 class="text-danger"><i class="fa fa-bell-o fa-1x hy-color"></i> Please selec' +
          't a proper option.</h5>'
      );
      validated = false;
    }

    if (msg.length < 5) {
      $('.msg-board').css({ display: 'block' });
      $('.msg-board').append(
        '<h5 class="text-danger"><i class="fa fa-bell-o fa-1x hy-color"></i> Your text is' +
          ' too short. Write more.</h5>'
      );
      validated = false;
    }

    if (validated) {
      $('.mail-submit').toggleClass('hy-btn').text('Sending...');
      Hayum.post(
        '/mail',
        {
          contact: contact,
          selected: selected,
          msg: msg,
        },
        function(res) {
          console.log(res);
          $('#msg').val('');
          var error = false;
          if (res.indexOf('ERROR') == 0) {
            error = true;
          }

          if (error) {
            $('#res-fail').css({ display: 'block' });
          } else {
            $('#res-success').css({ display: 'block' });
          }
          $('.mail-submit').toggleClass('hy-btn').text('Submit');
        }
      );
    }
  });

  $('select').change(function() {
    $('.dl-vid-btn#' + this.id).css('display', 'none');
  });

  // Load Content Requsts Ajax
  var $pbar = $('#cr-pbar');
  Hayum.post('/api/contentrequests', {}, function(res) {
    // console.log(JSON.parse(res)); s.replace(s.substring(2,7), '*****')
    var $contentRequests = $('#content-requests');
    $pbar.hide();
    res = JSON.parse(res);
    res.forEach(function(msg) {
      $contentRequests.append(
        "<li class='list-group-item' style='color: #777;'><span style='color: #008D79;'>" +
          msg.contact.replace(msg.contact.substring(2, 7), '*****') +
          " <span style='color: green;'>(" +
          msg.subject +
          ')</span></span>: ' +
          msg.msg +
          '</li>'
      );
    });
  });
  var $appPopUp = $('#app-slider-popup');
  var $popupCloseBtn = $('#app-slider-popup > #close');
  if (navigator.userAgent.match('Hayum App')) {
    $appPopUp.hide();
  }
  $popupCloseBtn.bind('click', function() {
    $appPopUp.fadeOut();
  });

  var audioPlayer = document.getElementById('audio-player');
  var duration;
  var actionButton = document.getElementById('action-button');
  var $actionButtonIcon = $('#action-button i');
  var playhead = document.getElementById('playhead');
  var timeline = document.getElementById('timeline');
  var $currentTime = $('#current-time');
  var $duration = $('#duration');

  var $actionButtonIcon = $('#action-button i');
  var $audioPlayerSrc = $('#audio-player-src');
  var $popupContent = $('#app-slider-popup .container #content');
  var $audioContainer = $('#audio-container');
  var hayumAudioPlayer = document.getElementById('hayum-audioplayer');

  $('.play-btn').click(function(event) {
    $appPopUp.show();
    $popupContent.hide();
    $audioContainer.fadeIn();
    $appPopUp.addClass('blend-gradient');
    var $this = $(this);
    var html = $this.html();
    var $lastPlayedItem = Hayum.lastPlayedItem;
    var item = $this.attr('data-play-item');
    $this.addClass('play-btn-active');
    play();
    if ($lastPlayedItem && item === $lastPlayedItem.attr('data-play-item')) {
      togglePlayButton($lastPlayedItem);
      return;
    } else {
      $lastPlayedItem && $lastPlayedItem.html(Hayum.itemPlayBtnIconName);
    }
    $currentTime.text('00:00');
    $duration.text('00:00');
    $lastPlayedItem && $lastPlayedItem.removeClass('play-btn-active');
    $audioContainer.find('#item-name').text(Hayum.loadingText);
    togglePlayButton($this);
    var collection = $this.attr('data-play-collection');
    var item_name = $this.attr('data-play-name');
    var url = '/link/' + item + '/' + collection;
    var src = $audioPlayerSrc.attr('src');
    Hayum.currentItemName = item_name;
    Hayum.get(url, null, function(res) {
      try {
        res = JSON.parse(res);
        $audioPlayerSrc.attr('src', res.link);
      } catch (e) {}
      $audioPlayerSrc.attr('data-active-item', item);
      audioPlayer.load();
      audioPlayer.play();
      $audioContainer.show();
      $popupContent.hide();
      $actionButtonIcon.removeClass(Hayum.playIconName);
      $actionButtonIcon.addClass(Hayum.pauseIconName);
    });
    Hayum.lastPlayedItem = $this;
  });

  // var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
  var timelineWidth = 350 - 18;
  if ($(window).width() < 580) {
    timelineWidth = 200 - 18;
    hayumAudioPlayer.style.width = '350px';
    timeline.style.width = '200px';
  }
  actionButton.addEventListener('click', toggleAndplay);
  audioPlayer.addEventListener('timeupdate', timeUpdate, false);
  audioPlayer.addEventListener('ended', function() {
    audioPlayer.pause();
    actionButton.className = 'play';
    $actionButtonIcon.removeClass(Hayum.pauseIconName);
    $actionButtonIcon.addClass(Hayum.playIconName);
    togglePlayButton(Hayum.lastPlayedItem);
  });
  // audioPlayer.addEventListener("loadedmetadata", function(metadata) {
  //     console.info(metadata);
  // }, false);

  timeline.addEventListener(
    'click',
    function(event) {
      moveplayhead(event);
      audioPlayer.currentTime = duration * clickPercent(event);
    },
    false
  );

  function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
  }

  playhead.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  var onplayhead = false;

  function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    audioPlayer.removeEventListener('timeupdate', timeUpdate, false);
  }

  function mouseUp(event) {
    if (onplayhead == true) {
      moveplayhead(event);
      window.removeEventListener('mousemove', moveplayhead, true);
      // change current time
      audioPlayer.currentTime = duration * clickPercent(event);
      audioPlayer.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
  }

  function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);
    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
      playhead.style.marginLeft = newMargLeft + 'px';
    }
    if (newMargLeft < 0) {
      playhead.style.marginLeft = '0px';
    }
    if (newMargLeft > timelineWidth) {
      playhead.style.marginLeft = timelineWidth + 'px';
    }
  }

  function timeUpdate() {
    var playPercent = timelineWidth * (audioPlayer.currentTime / duration);
    audioPlayer.currentTime &&
      $currentTime.text(Hayum.formatTime(audioPlayer.currentTime));
    duration && $duration.text(Hayum.formatTime(duration));
    playhead.style.marginLeft = playPercent + 'px';
    if (audioPlayer.currentTime == duration) {
      actionButton.className = '';
      actionButton.className = 'play';
    }
  }

  function play() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      actionButton.className = 'pause';
      $actionButtonIcon.removeClass(Hayum.playIconName);
      $actionButtonIcon.addClass(Hayum.pauseIconName);
    } else {
      audioPlayer.pause();
      actionButton.className = 'play';
      $actionButtonIcon.removeClass(Hayum.pauseIconName);
      $actionButtonIcon.addClass(Hayum.playIconName);
    }
  }

  function toggleAndplay() {
    var $activePlayBtn = $('.play-btn-active');
    $activePlayBtn && togglePlayButton($activePlayBtn);
    play();
  }

  function togglePlayButton($element) {
    $element.html().match(/play/i)
      ? $element.html(Hayum.itemPauseBtnIconName)
      : $element.html(Hayum.itemPlayBtnIconName);
  }

  audioPlayer.addEventListener(
    'canplaythrough',
    function() {
      duration = audioPlayer.duration;
      $audioContainer
        .find('#item-name')
        .text('Now Playing:  ' + Hayum.currentItemName);
    },
    false
  );

  function getPosition(el) {
    return el.getBoundingClientRect().left;
  }
}