function Services(){
    this.fetchData = function(){
        /**
         * Axios trả về đối tượng Promise
         * - pending (Chờ)
         * - Resolve (Thành công)
         * - Reject (Thất bại)
         */
        return axios({
            url: "https://6255692152d8738c692171c5.mockapi.io/api/tabula",
            method: "GET",
        });
        
    }
}