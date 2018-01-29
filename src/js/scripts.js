 var markers = [
    ["Выборгское шоссе, д. 132",60.05842, 30.3043183,false],
    ["Приморский пр., д.50",59.98247600000001,30.240202,false],
    ["Уманский переулок 68 к.1",59.966311, 30.45377,false],
    ["ул.Константина Заслонова, д.23,к.4",59.918769, 30.344165,false],
    ["Обуховской обороны, д.105",59.895222, 30.434068,false],
    ["Пр. Стачек д. 45 к.2",59.88741100000001, 30.259533,false],
    ["Софийская ул., д.14",59.881150, 30.397570,false],
    ["Пр. Металлистов., д. 51",59.968752, 30.4164554,false],
    ["Михаила Дудина, д.21А",60.069740, 30.342242,false]
];
var t; //карта

function init_map() {
  console.log('init_map');
  var e = new google.maps.StyledMapType([{
          featureType: "all",
          stylers: [{
              saturation: -80
          }]
      }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{
              hue: "#00ffee"
          }, {
              saturation: 50
          }]
      }, {
          featureType: "water",
          stylers: [{
              color: "#cccccc"
          }]
      }, {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{
              visibility: "off"
          }]
      }], {
          name: "Custom Style"
      });

  o = "custom_style",
  t = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      scrollwheel: !1,
      center: {
          lat: 59.97365450000001,
          lng: 30.314455825000003
      },
      mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, o]
      }
  }),
  n = (new google.maps.MarkerImage("pin.png", new google.maps.Size(84, 86), new google.maps.Point((-10), (-14)), new google.maps.Point(52, 46)), new google.maps.MarkerImage("pin.png", new google.maps.Size(70, 88), new google.maps.Point((-17), (-8)), new google.maps.Point(35, 44)));

  for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];
      var ltlng = new google.maps.LatLng(marker[1], marker[2]);
      var mk = new google.maps.Marker({
          position: ltlng,
          map: t,
          optimized: !1,
          icon: n,
          title: marker[0],
          qwe: false
      });

      mk.addListener('click', function() {
          var info = new google.maps.InfoWindow({
              content: "<p style='color:#000'>"+this.title+"</p>"
          });
          info.open(t, this);
      });

      marker[3] = mk;
  }


  $("body").on("mouseover", 'img[src="pin.png"]', function(e) {
      var o = $(e.target).parent().css("left"),
          t = $(e.target).parent().css("top");
      $('img[src="pin.png"]').filter(function() {
          return e.target != this && $(this).parent().css("left") == o && $(this).parent().css("top") == t
      }).css("-webkit-transform", "scale(1.3)", "transition: 2s")
  }), $("body").on("mouseout", 'img[src="pin.png"]', function(e) {
      var o = $(e.target).parent().css("left"),
          t = $(e.target).parent().css("top");
      $('img[src="pin.png"]').filter(function() {
          return e.target != this && $(this).parent().css("left") == o && $(this).parent().css("top") == t
      }).css("-webkit-transform", "scale(1)", "transition: 2s")
  }), t.mapTypes.set(o, e), t.setMapTypeId(o);
}

$(function (){
  console.log('init');

  $('.parallax-layer img').parallax({
    mouseport: $("body")
  });

  $(document).on('click','.select', function(e){
    $(this).toggleClass('select--opened');
    return false;
  });

  $(document).on('click','.select__item', function(e){
    var value = $(this).data('value');
    var text = $(this).html();
    var select = $(this).closest('.select');
    
    select.find('.select__input').val(value);
    select.find('.select__input').trigger('change');
    select.find('.select__placeholder').html(text);
    return false;
  });
  console.log('init');
});