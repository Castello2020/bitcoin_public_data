http://clientconfig.immunicity.org/pacs/all.pac
HTTP/1.1 200 OK
Server: cloudflare-nginx
Date: Thu, 24 Jul 2014 10:39:25 GMT
Content-Type: application/x-ns-proxy-autoconfig
Connection: close
Set-Cookie: __cfduid=dc894091e0e4e8487fe3c874a95d7cffc1406198365039; expires=Mon, 23-Dec-2019 23:50:00 GMT; path=/; domain=.immunicity.org; HttpOnly
X-Powered-By: PHP/5.3.3
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: 0
CF-RAY: 14ef7e657ac702b8-IAD

//
// 	Immunicity (www.immunicity.org)
//	Proxy Auto Configuration File
//
//	Do you like Immunicity? Consider sending Bitcoins to 1FLjigYRUianDzpMRXv9o8GHUWi7qrcCua
//
//	Current Configuration:
//		Univeral PAC File (all.pac)
//		This will unblock torrent sites and pornography
//
// 	PLEASE KEEP THIS FILE UPDATED IF YOU MIRROR IT LOCALLY. WE OFTEN MAKE A LOT OF CHANGES TO IT.
//
//	Generated at Thu, 24 Jul 2014 12:39:25 +0200	173.245.56.248//

function FindProxyForURL(url, host) {
    // Our proxy server name and port
    // This is randomly generated and changes each time you request the PAC file
    var proxyserver = 'gateway-0f62f9d7.cloud.immunicity.net:8080';
    //
    //  Here's a list of hosts to connect via the PROXY server
    // 		Don't add your own URLs - they wont work. Only these domains are allowed via our proxy servers
    //
    var pornlist = new Array(
        "check.immunicity.org",
        "*.redtubefiles.com",
        "redtube.com",
        "*.redtube.com",
        "*.phncdn.com",
        "pornhub.com",
        "*.pornhub.com",
        "xhamster.com",
        "*.xhamster.com",
        "*.xhcdn.com",
        "xvideos.com",
        "*.xvideos.com",
        "youporn.com",
        "*.youporn.com",
        "youjizz.com",
        "*.youjizz.com",
        "integrity.immunicity.net"
        

    );
    // Return our proxy name for matched domains
    // The list can be seen at https://immuncitiy.org/blocksites
    for(var i=0; i<pornlist.length; i++) {
        var value = pornlist[i];
        if ( shExpMatch(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }	
	
	    
    
    
    var proxylist = new Array(
    "check.immunicity.org",
	"thepiratebay.sx",
	"www.thepiratebay.sx",
	"thepiratebay.se",
	"www.thepiratebay.se",
	"thepiratebay.is",
	"www.thepiratebay.is",
	"thepiratebay.gl",
	"www.thepiratebay.gl",
	"thepiratebay.ac",
	"www.thepiratebay.ac",
	"thepiratebay.pe",
	"www.thepiratebay.pe",
	"thepiratebay.gy",
	"www.thepiratebay.gy",
	"piratebay.org",
	"www.piratebay.org",
	"piratebay.se",
	"www.piratebay.se",
	"piratebay.sx",
	"www.piratebay.sx",
	"piratebay.ac",
	"www.piratebay.ac",
	"piratebay.pe",
	"www.piratebay.pe",
	"piratebay.gy",
	"www.piratebay.gy",
	"thepiratebay.org",
	"www.thepiratebay.org",
	"thepiratebay.com",
	"www.thepiratebay.com",
	"rss.thepiratebay.sx",
	"www.rss.thepiratebay.sx",
	"kickass.to",
	"www.kickass.to",
	"kat.ph",
	"www.kat.ph",
	"kastatic.com",
	"www.kastatic.com",
	"piratereverse.info",
	"www.piratereverse.info",
	"livepirate.com",
	"www.livepirate.com",
	"getpirate.com",
	"www.getpirate.com",
	"movie2kproxy.com",
	"www.movie2kproxy.com",
	"movie4kproxy.com",
	"www.movie4kproxy.com",
	"movie2kproxy.org",
	"www.movie2kproxy.org",
	"movie4kproxy.org",
	"www.movie4kproxy.org",
	"kickassunblock.info",
	"www.kickassunblock.info",
	"kickasstorrents.com",
	"www.kickasstorrents.com",
	"katproxy.pw",
	"www.katproxy.pw",
	"katunblock.com",
	"www.katunblock.com",
	"kickassproxy.info",
	"www.kickassproxy.info",
	"kat.torrenticity.com",
	"www.kat.torrenticity.com",
	"katproxy.me",
	"www.katproxy.me",
	"h33t.com",
	"www.h33t.com",
	"h33t.pw",
	"www.h33t.pw",
	"h33tunblock.info",
	"www.h33tunblock.info",
	"isohunt.com",
	"www.isohunt.com",
	"static.isohunt.com",
	"www.static.isohunt.com",
	"fenopy.se",
	"www.fenopy.se",
	"fenopy.pw",
	"www.fenopy.pw",
	"fenopyreverse.info",
	"www.fenopyreverse.info",
	"movie4k.to",
	"www.movie4k.to",
	"img.movie4k.to",
	"www.img.movie4k.to",
	"1337x.org",
	"www.1337x.org",
	"1337x.pw",
	"www.1337x.pw",
	"extratorrent.com",
	"www.extratorrent.com",
	"extratorrent.pw",
	"www.extratorrent.pw",
	"extratorrent.cc",
	"www.extratorrent.cc",
	"torrentreactor.com",
	"www.torrentreactor.com",
	"torrentreactor.pw",
	"www.torrentreactor.pw",
	"torrentz.eu",
	"www.torrentz.eu",
	"eztv.it",
	"www.eztv.it",
	"eztvproxy.net",
	"www.eztvproxy.net",
	"ezrss.it",
	"www.ezrss.it",
	"firstrowuk.eu",
	"www.firstrowuk.eu",
	"firstrow1.eu",
	"www.firstrow1.eu",
	"webfirstrow.eu",
	"www.webfirstrow.eu",
	"firstrownow.eu",
	"www.firstrownow.eu",
	"firstrowus.eu",
	"www.firstrowus.eu",
	"firstrowproxy.com",
	"www.firstrowproxy.com",
	"dl4all.com",
	"www.dl4all.com",
	"dl4allproxy.pw",
	"www.dl4allproxy.pw",
	"yify-torrents.com",
	"www.yify-torrents.com",
	"yifyproxy.net",
	"www.yifyproxy.net",
	"rutracker.org",
	"www.rutracker.org",
	"rutor.org",
	"www.rutor.org",
	"s.rutor.org",
	"www.s.rutor.org",
	"rustorka.com",
	"www.rustorka.com",
	"mininova.org",
	"www.mininova.org",
	"onlytorrents.com",
	"www.onlytorrents.com",
	"fulldls.com",
	"www.fulldls.com",
	"torrentshub.com",
	"www.torrentshub.com",
	"fenopy.com",
	"www.fenopy.com",
	"bittorrent.am",
	"www.bittorrent.am",
	"meganova.org",
	"www.meganova.org",
	"bitsnoop.com",
	"www.bitsnoop.com",
	"torrent-finder.info",
	"www.torrent-finder.info",
	"solarmovie.so",
	"www.solarmovie.so",
	"torrentreactor.net",
	"www.torrentreactor.net",
	"torrentdownloads.net",
	"www.torrentdownloads.net",
	"katmirror.com",
	"www.katmirror.com",
	"torlock.com",
	"www.torlock.com",
	"limetorrents.com",
	"www.limetorrents.com",
	"vertor.com",
	"www.vertor.com",
	"torrentfunk.com",
	"www.torrentfunk.com",
	"torrentcrazy.com",
	"www.torrentcrazy.com",
	"torrent.tm",
	"www.torrent.tm",
	"torrentus.to",
	"www.torrentus.to",
	"torrentfunk.com",
	"www.torrentfunk.com",
	"torrentbit.net",
	"www.torrentbit.net",
	"take.fm",
	"www.take.fm",
	"seedpeer.me",
	"www.seedpeer.me",
	"toorgle.com",
	"www.toorgle.com",
	"torrentzap.com",
	"www.torrentzap.com",
	"filestube.com",
	"www.filestube.com",
	"yourbittorrent.com",
	"www.yourbittorrent.com",
	"smartorrent.com",
	"www.smartorrent.com",
	"nutorrent.com",
	"www.nutorrent.com",
	"bitwiki.org",
	"www.bitwiki.org",
	"torrentbox.com",
	"www.torrentbox.com",
	"omgtorrent.com",
	"www.omgtorrent.com",
	"torrentdownload.ws",
	"www.torrentdownload.ws",
	"geotorrents.com",
	"www.geotorrents.com",
	"legittorrents.info",
	"www.legittorrents.info",
	"torcache.net",
	"www.torcache.net",
	"qiq.ru",
	"www.qiq.ru",
	"qiqru.org",
	"www.qiqru.org",
	"1fichier.com",
	"www.1fichier.com",
	"2shared.com",
	"www.2shared.com",
	"4freeimagehost.com",
	"www.4freeimagehost.com",
	"4megaupload.com",
	"www.4megaupload.com",
	"4shared.com",
	"www.4shared.com",
	"64k.it",
	"www.64k.it",
	"9divx.com",
	"www.9divx.com",
	"9giga.sfr.fr",
	"www.9giga.sfr.fr",
	"abload.de",
	"www.abload.de",
	"adrive.com",
	"www.adrive.com",
	"alojarfotos.com",
	"www.alojarfotos.com",
	"arcadeupload.com",
	"www.arcadeupload.com",
	"axifile.com",
	"www.axifile.com",
	"bayimg.com",
	"www.bayimg.com",
	"opensharing.org",
	"www.opensharing.org",
	"torproject.org",
	"www.torproject.org",
	"firstrowsports.eu",
	"www.firstrowsports.eu",
	"imagebam.com",
	"www.imagebam.com",
	"desibbrg.com",
	"www.desibbrg.com",
	"imgbox.com",
	"www.imgbox.com",
	"exbii.com",
	"www.exbii.com",
	"songs.pk",
	"www.songs.pk",
	"stooorage.com",
	"www.stooorage.com",
	"desitorrents.com",
	"www.desitorrents.com",
	"desidhamal.com",
	"www.desidhamal.com",
	"piratebrowser.com",
	"www.piratebrowser.com",
	"filesflash.com",
	"www.filesflash.com",
	"bollywoodtorrents.me",
	"www.bollywoodtorrents.me",
	"exdesi.com",
	"www.exdesi.com",
	"mastitorrents.com",
	"www.mastitorrents.com",
	"abmp3.com",
	"www.abmp3.com",
	"bomb-mp3.com",
	"www.bomb-mp3.com",
	"filecrop.com",
	"www.filecrop.com",
	"freemp3box.com",
	"www.freemp3box.com",
	"mp3juices.com",
	"www.mp3juices.com",
	"mp3lemon.org",
	"www.mp3lemon.org",
	"mp3raid.com",
	"www.mp3raid.com",
	"mp3skull.com",
	"www.mp3skull.com",
	"newalbumreleases.net",
	"www.newalbumreleases.net",
	"rapidlibrary.com",
	"www.rapidlibrary.com",
	"static.yify-torrents.com",
	"www.static.yify-torrents.com",
	"primewire.ag",
	"www.primewire.ag",
	"free-tv-video-online.me",
	"www.free-tv-video-online.me",
	"watchfreemovies.ch",
	"www.watchfreemovies.ch",
	"vodly.to",
	"www.vodly.to",
	"projectfree.tv",
	"www.projectfree.tv",
	"tubeplus.me",
	"www.tubeplus.me",
	"vk.com",
	"www.vk.com",
	"yts.re",
	"www.yts.re",
	"static.yts.re",
	"www.static.yts.re",
	"integrity.immunicity.net"
  );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( shExpMatch(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }
    
    

    // route adservers through proxy to remove any tracking IDs 
    var iais = new Array(
        "123found.com",
        "googleads.g.doubleclick.net"
    );
    for(var i=0; i<iais.length; i++) {
        var value = iais[i];
        if ( shExpMatch(host, value) ) {
            //return "PROXY "+proxyserver;
            return "DIRECT";
        }
    }	

    
    // Don't pass local stuff through the proxy
     if ((host == "localhost") ||
     		(shExpMatch(host, "localhost.*")) ||
     		(host == "127.0.0.1")) {
       return "DIRECT";
     }

    return "DIRECT";
}
