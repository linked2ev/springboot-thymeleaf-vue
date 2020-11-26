


/**
 * ES5 - Componet 사용예제
 */

/* 전역 컴포넌트 */
//String 형태
Vue.component('ex1-string-component', {
    template: `
        <div class="module_tab" data-module-tab="wrap">
            <ul>
                <li v-for="(item, index) in items">
                    <button @click="btnClick( index )" type="button"><span>{{ item.button }}</span></button>
                </li>
            </ul>
            <div class="module_tab_contents">
                {{ message }}
            </div>
        </div>
    `,
    data () {
        return {
            message: '',
            items: [{
                'button': '버튼1',
                'contents': '버튼1 클릭'
            },{
                'button': '버튼2',
                'contents': '버튼2 클릭'
            },{
                'button': '버튼3',
                'contents': '버튼3 클릭'
            }]
        }
    },
    methods: {
        btnClick (targetIndex) {
            this.message = this.items[targetIndex].contents;
        }
    }
})

//templates 형태 - Vue Root App Id <div> 밖에 선언
Vue.component('ex2-template-component', {
    template: '#ex2-template',//<x-template> Id
    data () {
        return {
            message: '',
            items: [{
                'button': '버튼1',
                'contents': '버튼1 클릭'
            },{
                'button': '버튼2',
                'contents': '버튼2 클릭'
            },{
                'button': '버튼3',
                'contents': '버튼3 클릭'
            }]
        }
    },
    methods: {
        btnClick (targetIndex) {
            this.message = this.items[targetIndex].contents;
        }
    }
});

//Inline templates 형태 - Vue Root App Id <Div> 안에 선언
Vue.component('ex3-inline-example', {
    data () {
        return {
            message: '',
            items: [{
                'button': '버튼1',
                'contents': '버튼1 클릭'
            },{
                'button': '버튼2',
                'contents': '버튼2 클릭'
            },{
                'button': '버튼3',
                'contents': '버튼3 클릭'
            }]
        }
    },
    methods: {
        btnClick (targetIndex) {
            this.message = this.items[targetIndex].contents;
        }
    }
});

/* 지역 컴포넌트 */
//String 형태
let ex4StringComponent = {
    template: `
        <div class="module_tab" data-module-tab="wrap">
            <ul>
                <li v-for="(item, index) in items">
                    <button @click="btnClick( index )" type="button"><span>{{ item.button }}</span></button>
                </li>
            </ul>
            <div class="module_tab_contents">
                {{ message }}
            </div>
        </div>
    `,
    data () {
        return {
            message: '',
            items: [{
                'button': '버튼1',
                'contents': '버튼1 클릭'
            },{
                'button': '버튼2',
                'contents': '버튼2 클릭'
            },{
                'button': '버튼3',
                'contents': '버튼3 클릭'
            }]
        }
    },
    methods: {
        btnClick (targetIndex) {
            this.message = this.items[targetIndex].contents;
        }
    }
}

//templates 형태 - Vue Root App Id <Div>밖에 선언
let ex5TemplateComponent = {
    template: '#ex2-template',//<x-template> Id
    data () {
        return {
            message: '',
            items: [{
                'button': '버튼1',
                'contents': '버튼1 클릭'
            },{
                'button': '버튼2',
                'contents': '버튼2 클릭'
            },{
                'button': '버튼3',
                'contents': '버튼3 클릭'
            }]
        }
    },
    methods: {
        btnClick (targetIndex) {
            this.message = this.items[targetIndex].contents;
        }
    }
}


/**
 * 컴포넌트는 vue app id 보다 위에 선언되어야 한다.
 * app
 */
let app = new Vue({
    el: '#app',
    components: {
        'ex4-component': ex4StringComponent,
        'ex5-component': ex5TemplateComponent
    }
})