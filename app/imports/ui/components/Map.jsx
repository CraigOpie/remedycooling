import React from 'react';

let map = '';
let dataLayer = '';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 28.483576, lng: -82.533863 },
        zoom: 10,
        gestureHandling: 'greedy',
      },
    );
  }

  dataHandler = (getJson) => {
    for (let i = 0; i < dataLayer.length; i++) {
      map.data.remove(dataLayer[i]);
    }
    fetch(getJson)
      .then(response => response.json())
      .then(featureCollection => {
        dataLayer = map.data.loadGeoJson(featureCollection);
      });
    map.data.addListener('mouseover', (event) => {
      map.data.revertStyle();
    });
  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://maps.google.com/maps/api/js?key=AIzaSyDb4d-6_xhdRw_x4uwT3x6xZrVvDTtpr1Q';
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
      this.dataHandler('https://storage.googleapis.com/mapsdevsite/json/google.json');
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '400px' }} id={'map'} />
    );
  }
}

export default Map;
