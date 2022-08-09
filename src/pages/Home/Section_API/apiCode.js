const codes = [
    `BootPay.request({
      price: '1000', //실제 결제되는 가격
      application_id: '593f8febe13f332431a8ddae',
      name: '블링블링 마스카라', //결제창에서 보여질 이름
      pg: 'danal',
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [
          {
              item_name: '나는 아이템', //상품명
              qty: 1, //수량
              unique: '123', //해당 상품을 구분짓는 primary key
              price: 1000, //상품 단가
              cat1: 'TOP', // 대표 상품의 카테고리 상, 50글자 이내
              cat2: '티셔츠', // 대표 상품의 카테고리 중, 50글자 이내
              cat3: '라운드 티', // 대표상품의 카테고리 하, 50글자 이내
          }
      ],
      user_info: {
          username: '사용자 이름',
          email: '사용자 이메일',
          addr: '사용자 주소',
          phone: '010-1234-4567'
      },
      method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
      order_id: '고유order_id_1234', //관리하시는 고유 주문번호를 입력해주세요
      params: {
        callback1: '그대로 콜백받을 변수 1',
        callback2: '그대로 콜백받을 변수 2',
        customvar1234: '변수명도 마음대로'
      },
  }).error(function (data) {
      //결제 진행시 에러가 발생하면 수행됩니다.
      console.log(data);
  }).cancel(function (data) {
      //결제가 취소되면 수행됩니다.
      console.log(data);
  }).confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log(data);
      if(somthing) { // 재고 수량 관리 로직 혹은 다른 처리
        this.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        this.removeWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
  }).done(function (data) {
      //결제가 정상적으로 완료되면 수행됩니다
      //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
      console.log(data);
  });
`
    ,
    `Bootpay.init(getFragmentManager())
      .setApplicationId("59a7e647396fa64fcad4a8c2") // 해당 프로젝트(안드로이드)의 application id 값
      .setPG(PG.KCP) // 결제할 PG 사
      .setMethod(Method.CARD) // 결제수단
      .setName("맥북프로임다") // 결제할 상품명
      .setOrderId("1234") // 결제 고유번호
      .setPrice(1000) // 결제할 금액
      .addItem("마우스", 1, "123", 100) // 주문정보에 담길 상품정보, 통계를 위해 사용
      .addItem("키보드", 1, "122", 200) // 주문정보에 담길 상품정보, 통계를 위해 사용
      .onConfirm(new ConfirmListener() {
          // 결제가 진행되기 바로 직전 호출되는 함수로, 주로 재고처리 등의 로직이 수행
          @Override
          public void onConfirmed(@Nullable String message) {
              if (0 < stuck) Bootpay.confirm(message); // 재고가 있을 경우. 결제를 진행한다
              Log.d("confirm", message);
          }
      })
      .onDone(new DoneListener() { // 결제완료시 호출, 아이템 지급 등 데이터 동기화 로직을 수행합니다
          @Override
          public void onDone(@Nullable String message) {
              Log.d("done", message);
          }
      })
      .onCancel(new CancelListener() { // 결제 취소시 호출
          @Override
          public void onCancel(@Nullable String message) {
              Log.d("cancel", message);
          }
      })
      .onError(new ErrorListener() { // 에러가 났을때 호출되는 부분
          @Override
          public void onError(@Nullable String message) {
              Log.d("error", message);
          }
      })
      .show();`
,
   ` import UIKit
 import SwiftyBootpay

 class ViewController: UIViewController {
  var vc: BootpayController!

  func goBuy() {
    vc = BootpayController()

    // 주문정보 - 실제 결제창에 반영되는 정보
    vc.params {
        $0.price = 1000 // 결제할 금액
        $0.name = "블링블링 마스카라" // 결제할 상품명
        $0.order_id = "1234" //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
        $0.user_info = userInfo // 구매자 정보
        $0.pg = "kcp" // 결제할 PG사
        $0.phone = "010-1234-5678" // 결제할 PG사
        $0.method = "phone" // 결제수단
        $0.sendable = self // 이벤트를 처리할 protocol receiver
        $0.quotas = [0,2,3] // // 5만원 이상일 경우 할부 허용범위 설정 가능, (예제는 일시불, 2개월 할부, 3개월 할부 허용)
    }

    vc.addItem(item: item1) //배열 가능
    vc.addItem(item: item2) //배열 가능

    self.present(vc, animated: true, completion: nil) // 결제창 controller 호출
  }
}`
,
  `void goBootpayRequest(BuildContext context) async {
  Payload payload = Payload();
  payload.androidApplicationId = '5b8f6a4d396fa665fdc2b5e8';
  payload.iosApplicationId = '5b8f6a4d396fa665fdc2b5e9';

  payload.pg = 'inicis';
  payload.method = 'phone';
//  payload.methods = ['card', 'phone', 'vbank', 'bank'];
  payload.name = 'testUser';
  payload.price = 2000.0;
  payload.orderId = DateTime.now().millisecondsSinceEpoch.toString();

  User user = User();
  user.username = "사용자 이름";
  user.email = "user1234@gmail.com";
  user.area = "서울";
  user.phone = "010-1234-4567";

  Extra extra = Extra();
  extra.appScheme = 'bootpaySample';

  Item item1 = Item();
  item1.itemName = "미"키's 마우스"; // 주문정보에 담길 상품명
  item1.qty = 1; // 해당 상품의 주문 수량
  item1.unique = "ITEM_CODE_MOUSE"; // 해당 상품의 고유 키
  item1.price = 1000; // 상품의 가격

  Item item2 = Item();
  item2.itemName = "키보드"; // 주문정보에 담길 상품명
  item2.qty = 1; // 해당 상품의 주문 수량
  item2.unique = "ITEM_CODE_KEYBOARD"; // 해당 상품의 고유 키
  item2.price = 1000; // 상품의 가격
  List<Item> itemList = [item1, item2];

  BootpayApi.request(
    context,
    payload,
    extra: extra,
    user: user,
    items: itemList,
    onDone: (String json) {
      print('onDone: $json');
    },
    onReady: (String json) {
      //flutter는 가상계좌가 발급되었을때  onReady가 호출되지 않는다. onDone에서 처리해주어야 한다.
      print('onReady: $json');
    },
    onCancel: (String json) {
      print('onCancel: $json');
    },
    onError: (String json) {
      print('onError: $json');
    },
  );
}
}
`

]

export default codes