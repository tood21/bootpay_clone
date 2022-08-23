import memberAnalysis from "assets/images/Analytics/member_analysis.png";
import productAnalysis from "assets/images/Analytics/product_analysis.png"
import inflowAnalysis from "assets/images/Analytics/Inflow_analysis.png"
import salesAnalysis from "assets/images/Analytics/sales_analysis.png"
import platformAnalysis from "assets/images/Analytics/platform_analysis.png"
import channelAnalysis from "assets/images/Analytics/channel_analysis.png"


const contentsData = [
    {
        id: 1,
        title: "회원분석",
        description: "회원과 비회원의 활동량을 비교하는 메뉴로 전자상거래 사업 유형을 파악할 수 있습니다.회원과 비회원의 구매전환율을 기반으로 운영하시는 서비스가 신규 고객 확보 유형인지, 하이브리드 유형인지, 고객 충성도 유형인지를 파악할 수 있습니다.이를 기반으로 신규 고객 확보에 초점을 맞출지, 기존 고객의 재구매율에 초점을 둘지, 모두 초점을 둘지 더 디테일한 목표 설정이 가능합니다.",
        subText: "회원/비회원별 방문횟수, 고객단가, 체류시간, 페이지 전환수, 구매전환율 등",
        imgUrl: memberAnalysis,
    },
    {
        id: 2,
        title: "상품분석",
        description: "위 메뉴에서 주 고객을 알 수 있다면, 주로 판매되는 카테고리와 상품군 또한 파악할 필요가 있습니다.카테고리별로 전환율, 이탈율, 상품수와 매출을 파악할 수 있습니다.상품별로 가장 인기있는 상품, 매출이 높은 상품, 가성비가 좋은 상품과 가격대별로 판매하는 상품군과 판매량을 파악할 수 있어 전략적인 상품구성이 쉽게 가능합니다",
        subText: "카테고리별 Bounce Rate, 구매전환율, 상품수와 매출\n"+
            "상품별 판매금액, 방문자, ARPU, 가격대별 판매건수, 판매금액",
        imgUrl: productAnalysis,
    },
    {
        id: 3,
        title: "유입분석",
        description: "일자별로 방문한 신규유저, 재방문 유저, 판매금액을 볼 수 있습니다.방문자의 구매전환율과 Bounce Rate를 살펴봄으로 해당 날짜에 진행한 이벤트 결과를 직관적으로 살펴볼 수 있습니다.또한 인구통계별로 방문자 정보를 확인할 수 있으며, 시간대별로 어떤 패턴으로 방문하는지 살펴볼 수 있습니다.",
        subText: "DAU, 체류시간, 페이지 전환, 구매전환율, Bounce Rate, 고객단가, 유입 분석, 페이지 분석, 시간대별 방문 패턴 분석, 인구통계별 방문자 분석",
        imgUrl: inflowAnalysis,
    },
    {
        id: 4,
        title: "매출분석",
        description: "일자별로 매출과 취소된 금액을 살펴볼 수 있습니다.방문자 정보를 이용하여 구매자 1인의 가치인 ARPPU도 살펴볼 수 있습니다.구매자가 재구매하는데 걸리는 기간또한 살펴볼 수 있으며, 시간대별로 어떤 패턴으로 구매하는지 볼 수 있습니다.구매자의 인구통계별 정보도 함께 제공합니다.",
        subText: "일자별 판매금액, 취소금액, ARPPU, 결제건수, 결제단가\n" +
            "재구매까지 걸린기간, 시간대별 매출 패턴, 인구통계별 구매자 정보",
        imgUrl: salesAnalysis,
    },
    {
        id: 5,
        title: "플랫폼분석",
        description: "고객이 어떤 환경으로 접속하여 매출이 일어나는지에 대한 분석입니다.웹, 모바일, 안드로이드, 아이폰 환경에 대해 결제용이성을 살펴볼 수 있습니다.특정 환경에서 결제용이성이 낮다면 사이트 구성에 문제가 있거나 개선할 포인트를 찾을 수 있습니다.디바이스, 운영체제, 브라우저별로 다양한 플랫폼 정보를 제공합니다.",
        subText: "플랫폼별 방문자, 매출, Bounce Rate, ARPU, ARPPU\n" +
            "디바이스, 운영체제, 브라우저별로 정보 제공",
        imgUrl: platformAnalysis,
    },
    {
        id: 6,
        title: "채널분석",
        description: "채널분석은 바이럴 분석에 가깝습니다.판매페이지 링크를 어떤 채널에서 바이럴되어 유입되고 결제가 이루어졌는지에 대한 분석입니다.구매자가 판매링크를 클릭하여 제공하시는 서비스의 웹, 모바일웹에서 결제가 이루어지는 데이터를 분석합니다.채널별로 유입, 매출, 체류시간, 재방문율, 이탈율 등을 살펴볼 수 있습니다.",
        subText: "채널별 매출, 방문수, 재방문율, 페이지 전환 수, 구매전환율, 일자별 현황",
        imgUrl: channelAnalysis,
    },

]

export default contentsData;