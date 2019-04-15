

const COMMANDS = {
  getList: function() {
  	

    let list = []

    plus.io.resolveLocalFileSystemURL("/storage/emulated/0/netease/cloudmusic/music", function(entry) {
      var r = entry.createReader()

      r.readEntries(function(result) {
        for (var i = 0; i < result.length; i++) {
          list.push(result[i])
        }
        if (!window.frame1) {
        	window.frame1 = window.frames[0];
        }

        try {

	        frame1.postMessage({
	          data: list,
	          type: 'list'
	        }, '*')
        }catch(e) {
        	alert(e)
        }
      })
    })

  }
}

window.isConnected = false

// setTimeout(function() {

  $.ajax({
    url: 'http://192.168.3.13:8080',
    async: false,

    success: function(res) {
      if (self == top && !location.host) {
        // location = './iframe.html'
      } else {
        isConnected = true;
      }
    }
  })
// }, 500)


window.callplus = function(command, params, success) {

  try {
    let str = COMMANDS[command].toString() + `;${command}()`

    var parent = isConnected ? window.parent : window;

    parent.postMessage(str, '*')
  } catch (e) {
    alert(e)
  }
}


window.addEventListener('message', function(e) {
  try {
    var set = e.data;
    if (!set) { 
      return;
    }
    if (set.type == 'list') {
    	$Mp3List.list = set.data.slice(0,100)
    } 
  } catch (e) {
    alert(e)
  }
})
