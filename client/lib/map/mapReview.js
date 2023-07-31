export function createReviewMap(lat,lng){
    const mapContainer = document.getElementById('map') // 지도를 표시할 div 

let mapOption = { 
        center: new kakao.maps.LatLng(lat,lng), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
let positions = [
    {
        title: '마포곱창타운', 
        latlng: new kakao.maps.LatLng(37.55802606076667,126.91122376728507)
    },
];

// 마커 이미지의 이미지 주소입니다
const imageSrc = "/assets/icons/restaurant.svg"; 
    
for (let i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(65, 60); 
    
    // 마커 이미지를 생성합니다    
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });
    
}


// 커스텀 오버레이에 표시할 내용입니다     
// HTML 문자열 또는 Dom Element 입니다 
let content = `<div class="font-semibold text-base text-center stroke-white stroke-2">&nbsp;마포곱창타운&nbsp;<br/>&nbsp;연남점&nbsp;</div>`;

// 커스텀 오버레이가 표시될 위치입니다 
let position = new kakao.maps.LatLng(lat,lng);

// 커스텀 오버레이를 생성합니다
let customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    yAnchor: -0.3 
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);
}

// createReviewMap(37.558048589925534,126.91122939941944)