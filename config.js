module.exports = {
    app: {
        px: '--',
        token: 'OTQyMzYzMDIwODU4OTA4Njcy.YgjZ9A.rVHSFxJbc504K5dgveRTlz8niZ4',
        playing: 'by ČMATEJKO ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
