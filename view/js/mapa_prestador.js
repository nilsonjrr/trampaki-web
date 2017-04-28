/*global google*/
function mapEngine(){
    var mapa;
    var ultimo = new google.maps.Marker();
    
//  GERAR MAPA --------------------------------------------------------------------------------------------------------------
    function inicializar(){
    //  O objeto 'posicaoAtual' recebe como parametro as cordenadas relativas ao ponto onde o usuario se encontra
    //  tornando este o centro da tela será necessário tornar isto dinâmico, com um request Ajax.
        var posicaoAtual = new google.maps.LatLng(-23.96425614, -46.38520819);
        
    //  O JSON 'configuracoes' carrega as informações para renderização do mapa, sendo 'zoom' em relação ao nivel inicial
    //  o 'center' para o centro da tela, e o 'mapTypeId' para o tipo de visão do mapa, e o 'disableDefaultUI' desativa
    //  os controles padrões que o Google oferece em seus mapas.
        var noFeatures = [
            {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]   
             },
                                  {
                                    featureType: "transit",
                                    stylers: [
                                      { visibility: "off" }
                                    ]   
                                  }
        ];


        var configuracoes = {
            zoom: 13,
            center: posicaoAtual,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,

            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };
        
    //  Estilizando o mapa --------------------------------------------------------------------------------------------------
        function estiloDoMapa(){
            var meu_lost_desert =  [
{
"featureType": "all",
"elementType": "labels",
"stylers": [
{
    "visibility": "off"
},
{
    "color": "#f49f53"
}
]
},
{
"featureType": "administrative.country",
"elementType": "labels",
"stylers": [
{
    "visibility": "on"
},
{
    "hue": "#ff0000"
}
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text.fill",
"stylers": [
{
    "color": "#d65600"
}
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text.stroke",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "labels",
"stylers": [
{
    "visibility": "simplified"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text.fill",
"stylers": [
{
    "color": "#000000"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text.stroke",
"stylers": [
{
    "visibility": "simplified"
},
{
    "color": "#060606"
}
]
},
{
"featureType": "landscape",
"elementType": "all",
"stylers": [
{
    "color": "#f9ddc5"
},
{
    "lightness": -7
}
]
},
{
"featureType": "poi.business",
"elementType": "all",
"stylers": [
{
    "color": "#645c20"
},
{
    "lightness": 38
}
]
},
{
"featureType": "poi.government",
"elementType": "all",
"stylers": [
{
    "color": "#9e5916"
},
{
    "lightness": 46
}
]
},
{
"featureType": "poi.medical",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#813033"
},
{
    "lightness": 38
},
{
    "visibility": "off"
}
]
},
{
"featureType": "poi.park",
"elementType": "all",
"stylers": [
{
    "color": "#645c20"
},
{
    "lightness": 39
}
]
},
{
"featureType": "poi.school",
"elementType": "all",
"stylers": [
{
    "color": "#a95521"
},
{
    "lightness": 35
}
]
},
{
"featureType": "poi.sports_complex",
"elementType": "all",
"stylers": [
{
    "color": "#9e5916"
},
{
    "lightness": 32
}
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
{
    "color": "#813033"
},
{
    "lightness": 43
}
]
},
{
"featureType": "road",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#f97006"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#f97006"
},
{
    "lightness": "20"
},
{
    "saturation": "10"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#f97006"
},
{
    "saturation": "10"
},
{
    "lightness": "20"
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#f97006"
},
{
    "saturation": "10"
},
{
    "lightness": "20"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.stroke",
"stylers": [
{
    "color": "#db0303"
}
]
},
{
"featureType": "road.local",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#f19f53"
},
{
    "weight": 1.3
},
{
    "visibility": "on"
},
{
    "lightness": 16
}
]
},
{
"featureType": "road.local",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#f19f53"
},
{
    "lightness": -10
}
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
{
    "lightness": 38
}
]
},
{
"featureType": "transit.line",
"elementType": "all",
"stylers": [
{
    "color": "#793e10"
},
{
    "lightness": 22
}
]
},
{
"featureType": "transit.station",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
{
    "color": "#1994bf"
},
{
    "saturation": -69
},
{
    "gamma": 0.99
},
{
    "lightness": 43
}
]
}
]
            var styledMap = new google.maps.StyledMapType(meu_lost_desert, {name: "Mapa Style"});
            
            mapa.mapTypes.set('map_style', styledMap);
            mapa.setMapTypeId('map_style');
        }
        
    //  Alcance do Usuario --------------------------------------------------------------------------------------------------
        mapa = new google.maps.Map(document.getElementById("mapa"), configuracoes);
        mapa.setOptions({styles: noFeatures});
        estiloDoMapa();
    }

//  CARREGAR MARCADORES -----------------------------------------------------------------------------------------------------
    function marcadores(){
            $.ajax({
                type: "GET",
                url:  API + "/carregar-anuncios",
                headers:{
                    "Authorization": sessionStorage.getItem("authorization")
                },
                complete: function(data){   
                    carregarMarcadores(data.responseText);
                }
            });
        function carregarMarcadores(data){
                data = JSON.parse(data);
            var arrayResponse = [].slice.call(data);
                var arrayMarcadores = [];
                
                // Tratamento de divisão por anunciante:
                function groupBy(array, property) {
                    var hash = {};
                    for (var i = 0; i < array.length; i++) {
                        if (!hash[array[i][property]]) hash[array[i][property]] = [];
                        hash[array[i][property]].push(array[i]);
                    }
                    return hash;
                }
                var agrupadoAnunciante = groupBy(arrayResponse,'cd_usuario');
                for (var indexAnunciante in agrupadoAnunciante){
                    gerarMarcador((agrupadoAnunciante[indexAnunciante][0]), agrupadoAnunciante[indexAnunciante]);
                }
                function gerarMarcador(anunciante, anuncios){
                    var marcador = new google.maps.Marker({
                        position: new google.maps.LatLng(anunciante.cd_latitude, anunciante.cd_longitude),
                        title: anunciante.nm_usuario,
                        icon: "/view/img/blackHoleSun.png",
                        map: mapa,
                        animation: google.maps.Animation.DROP,
                        imagem: API + '/carregar-imagem/' + anunciante.cd_imagem+'',
                        anuncios: anuncios
                    });
                    marcador.addListener('click', function(){
                        ultimo.getAnimation() != null ? ultimo.setAnimation(null) : null;
                        carregarVisualizacao(marcador);
                        $("#info-moldura").css("display", "block");
                        
                    });
                    arrayMarcadores.push(marcador);
                }
                
                var clusterStyles = [
                  {
                    textColor: 'white',
                    url: '/view/img/patrick_cluster.png',
                    height: 53,
                    width: 53
                  },
                 {
                    textColor: 'white',
                    url: '/view/img/patrick_cluster.png',
                    height: 53,
                    width: 53
                  },
                 {
                    textColor: 'white',
                    url: '/view/img/patrick_cluster.png',
                    height: 53,
                    width: 53
                  }
                ];
                var mcOptions = {
                    gridSize: 50,
                    styles: clusterStyles,
                    maxZoom: 15
                };
                var markerclusterer = new MarkerClusterer(mapa, arrayMarcadores, mcOptions);
            //         var markerCluster = new MarkerClusterer(mapa, arrayMarcadores,
            // {imagePath: 'view/img/patrick_cluster.png'});
        }
        
        
        function carregarVisualizacao(marcador){
            document.getElementById('titulo').innerHTML = marcador.title;
            document.getElementById('info-moldura').style.opacity = 1;
            document.getElementById('info-moldura').style.height = "auto";
            document.getElementById('info-fundo-imagem').style.backgroundImage = "url(" +marcador.imagem+")";
            document.getElementById("anuncios").innerHTML = null;
            marcador.anuncios.forEach(function(anuncio){
                var wrapper_anuncio = document.createElement('div');
                    wrapper_anuncio.className = "anuncio";
                var anuncio_foto = document.createElement('div');
                    anuncio_foto.style.backgroundImage = "url(" + API + "/carregar-imagem/" + anuncio.cd_imagem01+")";
                    anuncio_foto.className = "foto-anuncio";
                var anuncio_titulo = document.createElement('div');
                    anuncio_titulo.innerHTML = anuncio.nm_titulo;
                    anuncio_titulo.className = "titulo-anuncio";
                var anuncio_botoes = document.createElement('div');
                    anuncio_botoes.className = 'marcador_botao';
                
                var anuncio_visualizar = document.createElement('span');
                    anuncio_visualizar.innerHTML = 'VISUALIZAR';
                    anuncio_visualizar.onclick = function(){
                        visualizaAnuncio(anuncio.cd_anuncio);
                        document.getElementById('info-moldura').style.opacity = 0;
                        document.getElementById('info-moldura').style.height = 1;
                        ultimo.setAnimation(null);                       
                    };
                var anuncio_conectar   = document.createElement('span');
                    anuncio_conectar.innerHTML = 'CONECTAR';
                    anuncio_conectar.onclick = function(){
                        enviarSolicitacao(anuncio.cd_anuncio);
                        document.getElementById('info-moldura').style.opacity = 0;
                        document.getElementById('info-moldura').style.height = 1;
                        ultimo.setAnimation(null);              
                    };                    
                    wrapper_anuncio.appendChild(anuncio_foto);
                    wrapper_anuncio.appendChild(anuncio_titulo);
                    anuncio_botoes.appendChild(anuncio_visualizar);
                    anuncio_botoes.appendChild(anuncio_conectar);
                    wrapper_anuncio.appendChild(anuncio_botoes);
                    document.getElementById("anuncios").appendChild(wrapper_anuncio);
            });
            
            marcador.setAnimation(google.maps.Animation.BOUNCE);
            ultimo = marcador;
            mapa.addListener('click', function(){
                document.getElementById('info-moldura').style.opacity = 0;
                document.getElementById('info-moldura').style.height = 1;
                ultimo.setAnimation(null);
            });
        }
    }

//  CHAMADA DE FUNCOES ------------------------------------------------------------------------------------------------------
    inicializar();
    marcadores();
}