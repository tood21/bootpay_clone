const informationData = [
  {
    id: "일반",
    information: [
      {
        id: "1",
        title: "1. 부트페이는 어떤 서비스인가요?",
        content: `<p>부트페이는 사업자가 PG 이용을 더욱 손쉽게 할 수 있도록 하는 서비스입니다.<br>
        PG 가입을 위한 절차를 대행해주고, 결제 연동을 쉽게 할 수 있도록 표준화된 형태의 결제 API를 제공합니다.<br><br>
        부트페이는 결제창이 빨리 뜰 수 있도록 결제 연동을 지원하고,<br>
        가장 저렴한 수수료로 PG를 이용하실 수 있습니다.<br>
        또한 매출을 증가시킬 수 있는 통계서비스를 이용할 수 있으며,<br>
        정기 리포트를 통해 객관적 조언을 얻으실 수 있습니다.<br>
        </p>`,
      },
      {
        id: "2",
        title: "2. 부트페이를 통해 PG에 가입하면 수수료가 더 비싸지 않나요?",
        content: `<p>꼭 그렇진 않습니다. 신규가맹점에게 카드수수료 2.9%에 해당하는 파격적인 수수료를 제안합니다.<br>
        기존 PG 가맹점이 부트페이를 이용하길 원할 경우, 협의하에 수수료 조정이 가능합니다.<br>
        </p>`,
      },
      {
        id: "3",
        title: "3. 부트페이를 이용하기 위한 비용은 얼마인가요?",
        content: `<p>모두 무료입니다. <br>
        또한 기존에 무료로 사용하시던 기능들이 갑자기 유료로 변경되지도 않습니다.<br>
        추가적으로 제공되는 기능들에 한해서 유료화가 진행될 예정입니다.<br>
        </p>`,
      },
      {
        id: "4",
        title:
          "4. 카페24 등의 임대형 솔루션을 이용 중인데 부트페이를 이용할 수 있나요?",
        content: `<p>현재 그렇게 할 순 없지만, 불편하신 점 인지하고 있어서 별도로 분석서비스만 분리할 계획입니다.<br>
        </p>`,
      },
      {
        id: "5",
        title:
          "5.  PG사의 UI를 그대로 쓰는 것이 아니라 부트페이에서 제공하는 별도의 UI가 있는 건가요?",
        content: `<p>기본적으로 PG사의 UI를 그대로 사용하시게 됩니다. 특정 PG사의 결제수단(카드, 계좌이체, 가상계좌, 휴대폰)을 선택하실 때 해당 PG의 UI가 바로 사용됩니다.<br><br>
        통합결제창, 회원 간편결제의 경우 부트페이가 결제창을 제공합니다.<br>
        어떻게 연동하느냐에 따라 PG사의 UI가 바로 뜨거나, 부트페이를 한번 거친 후 PG사의 UI가 뜨는 방식 2가지로 나뉩니다.<br>
        </p>`,
      },
    ],
  },
  {
    id: "PG가입",
    information: [
      {
        id: "1",
        title: "1. 지금 PG 가입을 신청하면 시간이 얼마나 걸릴까요?",
        content: `<p>심사 기간은 PG사별로 다르기 때문에 확답을 드릴 순 없지만, 평균 10영업일 이내로 마무리됩니다.<br>
        </p>`,
      },
      {
        id: "2",
        title: "2. PG사 가입 조건은 어떻게 되나요?",
        content: `<p>부트페이는 사업자와 PG사를 연결해주는 솔루션이며, 수수료 및 심사기준은 각 PG사와 카드사 정책을 따릅니다.<br><br>
        &nbsp;PG사와 카드사들은 각자 등록불가업종의 기준을 공시하고 있으므로 사전에 확인할 수 있습니다. 또한, 등록불가업종이 아니더라도 아래와 같은 경우는 등록이 불가할 수 있습니다.
          </p><ul>
            <li>구매자의 결제요청시점과 실제 결제실행시점이 다른 경우 (ex 크라우드펀딩)</li>
            <li>거래대상이 현물이 아닌 이용권, 상품권인 경우 (결제는 했지만 서비스의 거래는 불확실함)</li>
            <li>포인트로 환전해서 쓰거나 고가의 환금성 높은 재화의 경우 (카드깡으로 변질될 리스크)</li>
            <li>월 정기구독권 같은 경우 (PG사 정산 이후 구매자의 결제취소 가능성)</li>
            <li>비상시적으로 큰 거래가 발생하는 경우 (ex 콘서트 : 우천시 등 대규모 취소환불 가능성)</li>
          </ul>`,
      },
      {
        id: "3",
        title: "3. 사이트 구축이 완료되어야만 PG 가입이 가능한가요?",
        content: `<p>심사 과정에서 아래 내용에 대해 검토합니다.<br>
        </p><ul>
          <li>1. 메인 페이지 하단에 대표자, 사업자등록번호, 사업장 주소, 대표전화, 개인정보관리책임자 등의 정보 기재 여부</li>
          <li>2. 결제 프로세스(소비자가 상품을 선택하고 구매하는 전체적인 과정에 문제가 없는지, 결제 모듈이 정상적으로 작동되는지)</li>
        <ul>`,
      },
      {
        id: "4",
        title: "4. 기존 PG 가입자도 부트페이를 이용할 수 있나요?",
        content: `<p>이용하실 수 있습니다.<br><br>
        부트페이를 통해 연동하신 후, 한달 이내에 부트페이를 통해서 PG 재가맹을 해주셔야 합니다.<br>
         </p>`,
      },
      {
        id: "5",
        title: "5. 해외법인도 PG사 가입을 할 수 있나요?",
        content: `<p>현재 국내 PG사의 경우, 국내 법인만 가입이 가능합니다.<br><br>
        해외법인의 경우 페이팔 등을 이용해주셔야 합니다.
        </p>`,
      },
    ],
  },
  {
    id: "연동개발",
    information: [
      {
        id: "1",
        title: "1. PG 심사가 완료되기 전엔 결제 연동을 진행할 수 없나요?",
        content: `<p>진행하실 수 있습니다. <br>
        테스트 모드로 미리 결제 연동을 진행하시고 심사를 요청할 수 있습니다.<br>
        심사가 완료되면 PG사로부터  상점 아이디(MID)를 발급받게 되고,<br>
        부트페이 전산에 입력하시면 연동 과정이 끝나게 됩니다.<br>
        </p>`,
      },
      {
        id: "2",
        title: "2. 복수의 PG사를 연동할 수 있나요?",
        content: `<p>가능합니다. <br>
        관리자 페이지에서 PG사별로 관리가 가능하며, PG사별 결제수단도 선택 및 조합할 수 있습니다.<br>
        </p>`,
      },
      {
        id: "3",
        title: "3. ActiveX 없이 크롬에서 연동 가능한가요?",
        content: `<p>가능합니다.<br> ActiveX를 사용할 수 없을 때 앱카드를 사용하도록 전환이 됩니다.
        <br>
        </p>`,
      },
    ],
  },
];

export default informationData;
