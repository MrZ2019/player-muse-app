
<template>
	<mu-list>
		<mu-list-item v-for="i in 100" @click="play(i.name)">{{i}}</mu-list-item>
	</mu-list>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				musicDirectory: '/storage/emulated/0/netease/cloudmusic/music/'
			}
		},

		mounted() {
			let self = this
			window.$Mp3List = self
			setTimeout(function() {

				callplus('getList', {
					url: self.musicDirectory
				}, function(data) {

					self.list = data
				})
			}, 200)
		},

		methods: {
			play(name) {

				try{
				let self = this

				if(self.player) {
					self.player.stop()
				}
				self.player = plus.audio.createPlayer(self.musicDirectory + name);

				self.player.play()
				}catch(e) {
					alert(e)
				}

			}
		}
	}
</script>