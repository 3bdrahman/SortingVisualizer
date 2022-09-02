class Helper {
    constructor(time, list=[]){
        this.time= parseInt(400/time);
        this.list=list;
    }

    mark = async(index) =>{
        this.list[index].setAttribute("class", "cell current");
    }

    markSpl= async (index) =>{
        this.list[index].setAttribute("class", "bar min");
    }

    unmark=async (index) =>{
        this.list[index].setAttribute("class", "bar");
    }

    pause = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    }
  compare = async (index1, index2) => {
        await this.pause();
        let value1 = Number(this.list[index1].getAttribute("value"));
        let value2 = Number(this.list[index2].getAttribute("value"));
        if(value1 > value2) {
            return true;
        }
        return false;
    }

    swap = async (idx1,idx2) =>{
        await this.pause();
        let val1 = Number(this.list[idx1].getAttribute("value"));
        let val2 = Number(this.list[idx2].getAttribute("value"));
        this.list[idx1].setAttribute("value",val2);
        this.list[idx1].style.height = `${3.8*val2}px`;
        this.list[idx2].setAttribute("value",val1);
        this.list[idx2].style.height=`${3.8*val1}px`;
    }
    }
