var request = require('supertest');
var app = require('../app');
var data = {"topTracks":{"tracks":[{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/11yGGRuCUv9xGaBvoDXPjW"},"href":"https://api.spotify.com/v1/albums/11yGGRuCUv9xGaBvoDXPjW","id":"11yGGRuCUv9xGaBvoDXPjW","images":[{"height":640,"url":"https://i.scdn.co/image/2218e4008404ac1f08077c757b35c6a29c617f49","width":640},{"height":300,"url":"https://i.scdn.co/image/29b6f47e476d8f75748e6428a6e9f002282d46b3","width":300},{"height":64,"url":"https://i.scdn.co/image/81a96b673036bc8f3f7d0cfb48847b1b080759c1","width":64}],"name":"Indie Rock On the Road, Vol. 1","type":"album","uri":"spotify:album:11yGGRuCUv9xGaBvoDXPjW"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":277413,"explicit":false,"external_ids":{"isrc":"FR0W61641100"},"external_urls":{"spotify":"https://open.spotify.com/track/22tpDjiymodVUjBYSGr4Bw"},"href":"https://api.spotify.com/v1/tracks/22tpDjiymodVUjBYSGr4Bw","id":"22tpDjiymodVUjBYSGr4Bw","name":"I'm the Wolf","popularity":2,"preview_url":"https://p.scdn.co/mp3-preview/cceafa1c97b04434be4faf1ef1f43c754aa56b07","track_number":14,"type":"track","uri":"spotify:track:22tpDjiymodVUjBYSGr4Bw"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":334480,"explicit":false,"external_ids":{"isrc":"BRNFS1400092"},"external_urls":{"spotify":"https://open.spotify.com/track/1fiBrf7GC8afYuEs90PEGO"},"href":"https://api.spotify.com/v1/tracks/1fiBrf7GC8afYuEs90PEGO","id":"1fiBrf7GC8afYuEs90PEGO","name":"Mr. Blue Sky","popularity":2,"preview_url":"https://p.scdn.co/mp3-preview/68b46f81ff585b541b9620f505f7ec536bbb01e2","track_number":1,"type":"track","uri":"spotify:track:1fiBrf7GC8afYuEs90PEGO"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":233200,"explicit":false,"external_ids":{"isrc":"BRNFS1400101"},"external_urls":{"spotify":"https://open.spotify.com/track/7kg1U3iT8GoosoljWoWQUU"},"href":"https://api.spotify.com/v1/tracks/7kg1U3iT8GoosoljWoWQUU","id":"7kg1U3iT8GoosoljWoWQUU","name":"Volcano","popularity":1,"preview_url":"https://p.scdn.co/mp3-preview/4796d915e34d52cb0ebde529249c9f575e82a735","track_number":10,"type":"track","uri":"spotify:track:7kg1U3iT8GoosoljWoWQUU"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":251840,"explicit":false,"external_ids":{"isrc":"BRNFS1400095"},"external_urls":{"spotify":"https://open.spotify.com/track/2kzssor1ZzWi1KgHGI2ClX"},"href":"https://api.spotify.com/v1/tracks/2kzssor1ZzWi1KgHGI2ClX","id":"2kzssor1ZzWi1KgHGI2ClX","name":"To Love","popularity":1,"preview_url":"https://p.scdn.co/mp3-preview/becf8e5f6fa612569569922ff0682087e1f470b8","track_number":4,"type":"track","uri":"spotify:track:2kzssor1ZzWi1KgHGI2ClX"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":254920,"explicit":false,"external_ids":{"isrc":"BRNFS1400096"},"external_urls":{"spotify":"https://open.spotify.com/track/2GevFwQSNEDbMhlJ0kmMZz"},"href":"https://api.spotify.com/v1/tracks/2GevFwQSNEDbMhlJ0kmMZz","id":"2GevFwQSNEDbMhlJ0kmMZz","name":"Our Prays Aren't Just Essays","popularity":1,"preview_url":"https://p.scdn.co/mp3-preview/1c1ef20395f5c91dd82c5f2e341defc1566e649a","track_number":5,"type":"track","uri":"spotify:track:2GevFwQSNEDbMhlJ0kmMZz"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":269666,"explicit":false,"external_ids":{"isrc":"BRNFS1400094"},"external_urls":{"spotify":"https://open.spotify.com/track/4bL8aGjEe80NeFBWcP52Wv"},"href":"https://api.spotify.com/v1/tracks/4bL8aGjEe80NeFBWcP52Wv","id":"4bL8aGjEe80NeFBWcP52Wv","name":"Maryanne","popularity":1,"preview_url":"https://p.scdn.co/mp3-preview/d8764adc500b66dd73c936e6fee1f0401eaaaffb","track_number":3,"type":"track","uri":"spotify:track:4bL8aGjEe80NeFBWcP52Wv"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":307080,"explicit":false,"external_ids":{"isrc":"BRNFS1400099"},"external_urls":{"spotify":"https://open.spotify.com/track/2oQaQLBQCw78FGIIUQD34F"},"href":"https://api.spotify.com/v1/tracks/2oQaQLBQCw78FGIIUQD34F","id":"2oQaQLBQCw78FGIIUQD34F","name":"Jaws","popularity":1,"preview_url":"https://p.scdn.co/mp3-preview/aaf0587f4c839287c6f67ba31c8aceb553a3c4bf","track_number":8,"type":"track","uri":"spotify:track:2oQaQLBQCw78FGIIUQD34F"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":265306,"explicit":false,"external_ids":{"isrc":"BRNFS1400093"},"external_urls":{"spotify":"https://open.spotify.com/track/3p4lgArSUIozWD6801HIX2"},"href":"https://api.spotify.com/v1/tracks/3p4lgArSUIozWD6801HIX2","id":"3p4lgArSUIozWD6801HIX2","name":"Sentimental Car","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/85fb30afb165e379fbad1333ca39d3396d470665","track_number":2,"type":"track","uri":"spotify:track:3p4lgArSUIozWD6801HIX2"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":312186,"explicit":false,"external_ids":{"isrc":"BRNFS1400103"},"external_urls":{"spotify":"https://open.spotify.com/track/2WFkjG7LjNcfAohIHupVWp"},"href":"https://api.spotify.com/v1/tracks/2WFkjG7LjNcfAohIHupVWp","id":"2WFkjG7LjNcfAohIHupVWp","name":"I'd Kill If I Had To","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/c8ed8436326a3330d91ea89964e552fc9498fcc6","track_number":12,"type":"track","uri":"spotify:track:2WFkjG7LjNcfAohIHupVWp"},{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":263080,"explicit":false,"external_ids":{"isrc":"BRNFS1400097"},"external_urls":{"spotify":"https://open.spotify.com/track/1wYKyiZFfxHKV2HfPShTFV"},"href":"https://api.spotify.com/v1/tracks/1wYKyiZFfxHKV2HfPShTFV","id":"1wYKyiZFfxHKV2HfPShTFV","name":"Jungbomb","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/aceaf839fa824abacbdbc7bc98117b1e03703bdb","track_number":6,"type":"track","uri":"spotify:track:1wYKyiZFfxHKV2HfPShTFV"}]},"albums":{"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71/albums?offset=0&limit=50&album_type=album","items":[{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"}],"limit":50,"next":null,"offset":0,"previous":null,"total":1}};
var dataSearch = {"artists":{"href":"https://api.spotify.com/v1/search?query=vinyl+laranja&offset=0&limit=20&type=artist","items":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"followers":{"href":null,"total":60},"genres":[],"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Vinyl Laranja","popularity":2,"type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"limit":20,"next":null,"offset":0,"previous":null,"total":1}};

describe('GET /musicexplorer/get', function() {

    describe('No paramaters', function () {
        it('should return 500 server error', function (done) {
            request(app)
                .get('/musicexplorer/get')
                .expect(500, done);
        });
    });

    describe('Right parameters', function () {
        it('should return 200 ok', function (done) {
            request(app)
                .get('/musicexplorer/get?artistId=1LvWAKQ20drCAtoMXmbl71&country=GB')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200, data, done);
        })
    });

});

describe('GET /musicexplorer/search', function() {

    describe('No paramaters', function () {
        it('should return 500 server error', function (done) {
            request(app)
                .get('/musicexplorer/search?searchTerm=')
                .expect(500, done);
        });
    });

    describe('Right parameters', function () {
        it('should return 200 ok', function (done) {
            request(app)
                .get('/musicexplorer/search?searchTerm=vinyl laranja')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200, dataSearch, done);
        })
    });

});
