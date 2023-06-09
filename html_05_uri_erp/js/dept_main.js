document.addEventListener("DOMContentLoaded", ()=>{
    /* 
        dept_main 에서 입력하는 요소중에서
        거래처코드, 거래처명, 대표전화, 담당자명, 담당자연락처는 반드시 입력해야 하는 요소이다

        각 요소를 입력하지 않고 저장을 할 경우
        alert 경고를 띄우고, 값을 입력하도록 하는 fornt validation(유효성 검사)를 실행하시오
    */

    const d_code = document.querySelector("#d_code")
    const d_name = document.querySelector("#d_name")
    const d_tel = document.querySelector("#d_tel")
    const d_manager = document.querySelector("#d_manager")
    const d_man_tel = document.querySelector("#d_man_tel")
    const btn_save = document.querySelector("button")

    const btnSaveOnClick = () => {
        // #s_name id 가 부착된(s_name) input box 에 입력된
        // text 를 변수에 보관하기
        const dCodeText = d_code.value
        const dNameText = d_name.value
        const dTelText = d_tel.value
        const dManagerText = d_manager.value
        const dManTel = d_man_tel.value

        if(!dCodeText) {
            alert("거래처코드는 반드시 입력해야 합니다")
            d_code.focus();
            return false
        }
        if(!dNameText) {
            alert("거래처명은 반드시 입력해야 합니다")
            d_name.focus();
            return false
        }
        if(!dTelText) {
            alert("대표전화는 반드시 입력해야 합니다")
            d_tel.focus();
            return false
        }
        if(!dManagerText) {
            alert("담당자명은 반드시 입력해야 합니다")
            d_manager.focus();
            return false
        }
        if(!dManTel) {
            alert("담당자연락처는 반드시 입력해야 합니다")
            d_man_tel.focus();
            return false
        }
    };
    btn_save.addEventListener("click", btnSaveOnClick)
})