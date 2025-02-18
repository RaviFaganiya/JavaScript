

    async function fetchdata() {
        try{
            const response = await axios.get("https://vfolo.com/websy/API/fetch_course_data.php");
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    fetchdata();


