
let app = new Vue({
    el: '#app',
    data() {
        return {
            boardList: [],
            allChecked: false
        }
    },
    methods: {
        getList() {
            axios.get('/example/api/boards', {
            })
            .then((response) => {
                console.log(response.data);
                this.boardList = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally( () => {
            });
        },
        checkedAll(checked) {
            this.allChecked = checked
            for (let i in this.boardList) {
                this.boardList[i].selected = this.allChecked;
            }
        },
        selected (e) {
            for (let i in this.boardList) {
                if(! this.boardList[i].selected) {
                    this.allChecked = false;
                    return;
                } else {
                    this.allChecked = true;
                }
            }
        },
        getSelected(){
            let boardIds = [];
            for (let i in this.boardList) {
                if(this.boardList[i].selected) {
                    boardIds.push(this.boardList[i].boardId);
                }
            }
        },
    },
    mounted() {
        this.getList();
    }
})