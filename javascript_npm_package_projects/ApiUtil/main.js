const ApiUtil = () => {
    const options = {
        apiReq : async (url,header='') => {
            if (typeof url === 'string'){
            if (header){
                try {
                const result = await fetch(url).then((response)=>{
                    return response.json();
                })
            } catch (err) {
                return err;
            }
            }else{
                try {
                const result = await fetch(url).then((response)=>{
                    return response.json();
                })
            } catch (err) {
                return err;
            }}
            }
        },
        tester : async (url , header='') => {
            if (typeof url === "string"){
                if (header){
                    try {
                    const res = await fetch (url,header);
                    if (res.json()){
                        return true
                    }
                    } catch (err) {
                        return err
                    }
                }else {
                    try {
                        const res = await fetch (url);
                        if (res.json()){
                            return true
                        }
                        } catch (err) {
                            return err
                        }
                }
            }
        }
    };
    return options;
};

module.exports = ApiUtil;