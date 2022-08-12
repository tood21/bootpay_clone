import pg from "assets/images/Overview/pg_payment.png"
import easy from "assets/images/Overview/easy_payment.png"
import total from "assets/images/Overview/total_payment.png"
import routine from "assets/images/Overview/routine_payment.png"
import remote from "assets/images/Overview/remote_payment.png"




const sectionData = [
    {
        id: 1,
        title: "PG결제",
        text: "결제하기' 클릭시 PG사의 결제창이 뜨는것을 말합니다.\n" +
            "카드, 휴대폰, 계좌이체, 가상계좌 등의 결제수단이 있으며,\n" +
            "결제수수료는 각각 다릅니다.\n" +
            "\n" +
            "일반적으로 결제발생 후 D+5일마다 정산되며,\n" +
            "매일 거래가 발생할 경우 매일 정산을 받게됩니다.",
        service: "카드, 휴대폰, 계좌이체, 가상계좌, 에스크로 등",
        buttonValue : "PG 결제",
        img: pg,
        descriptionLeft: true,
        bgColor: "#fff"
    },
    {
        id: 2,
        title: "간편 결제",
        text: "회원/비회원 대상으로 간편결제를 제공합니다.\n" +
        "미리 등록된 지불수단과 배송정보로 빠르게 결제할 수 있습니다.\n"+
            "PG 결제와 함께 간편결제를 추가적으로 구성하길 추천합니다.",
        service: "네이버페이, 카카오페이, 페이코, 토스 등",
        buttonValue : "간편 결제",
        img: easy,
        descriptionLeft: false,
        bgColor: "#fff"

    },
    {
        id: 3,
        title: "통합 결제",
        text: "여러 PG사의 결제수단을 함께 구성할 수 있습니다.\n"+
        "특정 결제수단 선택시 해당 PG사의 결제창이 열립니다.\n" +
            "\n" +
        "소스코드 수정 없이 관리자에서 PG나 결제수단을 변경할 수 있습니다.\n" +
        "통합결제창은 부트페이에서 지원하는 기능입니다.",
        service: "PG 결제 + 간편 결제",
        buttonValue : "통합 결제",
        img: total,
        descriptionLeft: true,
        bgColor: "#F7F9FC"

    },
    {
        id: 4,
        title: "정기 결제",
        text: "사용한 만큼 정기적으로 결제합니다.\n"+
        "한달에 한번 정해진 가격을 결제하는 것을 정기결제라 합니다.\n" +
        "\n" +
        "꼭 정해진 주기와 가격의 제약이 있지 않습니다.\n" +
        "자유로운 횟수, 주기, 금액으로도 결제를 진행할 수 있습니다.\n" +
        "한번 등록된 빌링키로 자유롭게 결제가 가능하기때문에,\n" +
        "최초등록시 본인인증, 공인인증서 등록과 같은 보안절차가 있을 수 있습니다.",
        service: "나이스페이, 다날, 페이레터, KCP, 페이앱, 웰컴페이먼츠 사용 가능",
        buttonValue : "정기 결제",
        img: routine,
        descriptionLeft: false,
        bgColor: "#F7F9FC"


    },
    {
        id: 5,
        title: "원격 결제",
        text: "결제창을 링크형태로 문자나 이메일로 보내 결제를 받을 수 있습니다.\n"+
        "어떤 고객이 결제를 할지에 대한 정보를 설정하여 링크를 생성합니다.\n"+
        "보내진 결제링크는 고객이 결제할 수 있고, 조르기 기능처럼 다른 사람이 결제를 할 수 있습니다.\n"+
        "\n"+
        "상품명과 가격이 구체적으로 설정되지 않았을 때에도 결제폼을 생성할 수 있습니다.\n"+
        "결제폼은 구매자가 결제할 상품명, 가격, 구매자 주소, 메모 등을 입력할 수 있습니다.\n",
        service: "SMS, Email, 블로그, 인스타그램 등 링크 결제",
        buttonValue : "결제폼",
        img: remote,
        descriptionLeft: true,
        bgColor: "#fff"

    }
]

export default sectionData;