import feeLeft from "../../../assets/images/PgApply/section_support_fee.svg";
import feeRight from "../../../assets/images/PgApply/section_support_fee_right.svg";

const contentData = [
    {
        id:1,
        titleSpan: "영중소 수수료 혜택",
        title: " 지원",
        text: "사업자 구분에 따른 신용카드 수수료 테이블",
        list: [
            {
                id:"1",
                title: "영세 (~3억)",
                value: "1.4%"
            },
            {
                id:"2",
                title: "중소1 (3억~5억)",
                value: "1.9%"
            },
            {
                id:"3",
                title: "중소2 (5억~10억)",
                value: "2.0%"
            }, {
                id:"4",
                title: "중소3 (10억~30억)",
                value: "2.2%"
            },
            {
                id:"5",
                title: "일반",
                value: "2.7%"
            }
        ],
        descriptionUp: "국세청 기준으로, 6개월 단위로 매출 등급 조정 및 우대수수료가 적용됩니다.",
        descriptionDown: "PG사마다 영중소 수수료 테이블은 다를 수 있습니다.",
        img: feeLeft
    }
    ,
    {
        id: 2,
        titleSpan: "신규 PG 가맹",
        title: " 지원",
        text: "PG사마다 수수료 테이블은 다를 수 있습니다",
        list: [
            {
                title: "신용카드 (일반기준)",
                value: "2.7%"
            },
            {
                title: "실시간 계좌이체",
                value: "1.8%"
            },
            {
                title: "가상계좌",
                value: "300원"
            }, {
                title: "휴대폰 소액결제",
                value: "4.5%"
            },
            {
                title: "최초가입비",
                value: "20만원"
            }
        ],
        descriptionUp:"신규 가맹점의 경우 최초 1회 PG 가입비용이 발생합니다. (부트페이에게 지급)",
        descriptionDown: "기존 PG 가맹자의 경우 재가맹 하셔야만 이용이 가능합니다.",
        img: feeRight
    }
]

export default contentData