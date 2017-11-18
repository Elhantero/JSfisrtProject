console.log("OK");
var API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE5NGM0ZjI5YjI5NzA5YTBhNjA1MzA4NDNmMDQ1YWM2MmI1ZDYwYmNlYzlhN2Q4ODNkZGZmZjZlOTI1OGFmY2Y4Y2YwZjQ2YTVmY2VjNzE5In0.eyJhdWQiOiIxMCIsImp0aSI6ImE5NGM0ZjI5YjI5NzA5YTBhNjA1MzA4NDNmMDQ1YWM2MmI1ZDYwYmNlYzlhN2Q4ODNkZGZmZjZlOTI1OGFmY2Y4Y2YwZjQ2YTVmY2VjNzE5IiwiaWF0IjoxNTEwMjQ1OTQzLCJuYmYiOjE1MTAyNDU5NDMsImV4cCI6MTgyNTc3ODc0Mywic3ViIjoiNzM3Iiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.tob1Mlwdyqh2qD-TvOrGJMLC6JUAytnMX0z3f9Dt4E8e8PHrCj59G16YKepwDFdumhhLG5evmTuI3EWE_JXehrYQP8OgXioVFuA6WpvH2A53jWJGcNoGk38imPSPIQhVtOnyFR-jUVak4Po33ijb0noHl9gl6k0SkeJs88aMni44VlwhaohlQ7BptczM_dXYcxJK05IkfyG_levnXFO6U9i9EN-nLyp3M44QI3LX4Xh0NrkI-b8ry5FoGbJfU1d0E8s_3LMhTMMW-NLW4wAufjHBeucEa0A02m4UJUCV2Ymh_pT1KZ43Ygn6wgVJ6N8LAN9sJkmXPJ88upx-If6gMar3WbfhPkO7CIFk9aXa_D1oqKVnDJwNiIXmNB0kg-yWrLmKav7bfwtfZV9Z5KQssRmWEHPZdvemFJwUYwSMegQVcj5zfjotM_Vq2HKvXUvsQixPyjcC3b37hPDGrThT8tmq-YfrESAyYSapgTsy31T2Mli9ukS9eTteWVHSRgaUvtDfG6Zg2e1t5uMwMSA87_dtZ7-4Yl01JMih9ge2n3U09IjfFTkjo0yft_bGuxMSKFNOn9qmXC4qKM6Ne4QuAa9JGNkHQ72RvjMXCWgfY5q8dMi7SER2Llr054UXK95uab4NcGzHVTroeGmRBr4m8nU6RoIMsM7RjZpKmkOXApQ";
var client = new INTITAClient({
    key: API_KEY,
});
console.log(client);

var my_id = 737;

client.getUserDetails(my_id, function(error, data) {
    console.log(error, data)
    document.getElementById("avatar").src = data.avatar;
    document.getElementById("firstN").innerText = data.firstName + ' ' + data.secondName;
    document.getElementById("adress").innerText = data.address;
    document.getElementById("email").innerText = data.email;
    document.getElementById("phone").innerText = data.phone;
    document.getElementById("aboutMy").innerText = data.aboutMy;
    document.getElementById("facelink").href = data.facebook;
    document.getElementById("twitterlink").href = data.twitter;
    document.getElementById("linkedin").href = data.linkedin;

    document.getElementById("adress2").innerText = data.address;
    document.getElementById("phone2").innerText = data.phone;
    document.getElementById("email2").innerText = data.email;

    document.getElementById("facelink2").href = data.facebook;
    document.getElementById("twitterlink2").href = data.twitter;
    document.getElementById("linkedin2").href = data.linkedin;

    document.getElementById("googleplus").href = data.googleplus;
    document.getElementById("sity").innerText = data.city;
    document.getElementById("educationForm").innerText = data.educationForm;
    document.getElementById("education").innerText = data.education;
    document.getElementById("interests").innerText = data.interests;

    var trenerId = data.trainers;
    document.getElementById("interests").innerText = data.interests;
    document.getElementById("trainers").innerText = trenerId[0].firstName + ' ' + trenerId[0].secondName;
});



client.getUserCoursesAndModules(my_id, function(error, data) {
    console.log(error, data)

    var cursesId = data.courses[0].id;
    client.getModuleInfo(1, function(error, data) {
        console.log(error, data)
    });
    client.getCourseInfo(cursesId, function(error, data) {
        console.log(error, data)
        document.getElementById("curse").innerText = data.title_en;
    });

    client.getCourseModules(cursesId, function(error, data) {
        console.log(error, data)
        var arr = document.getElementsByClassName("modules");
        var modId = [];
        for (i in data) {
            arr[i].innerText = data[i].title;
            modId[i] = data[i].id;
        }



        var arrLec = document.getElementsByClassName("lec");
        var counterLec = 0;
        
		for (var i = 0; i < modId.length; i++) {
            var count = modId[i];
            client.getModuleLectures(count, function(error, data) {
                console.log(error, data)
                for (j in data) {
                    arrLec[counterLec].innerText = data[j].title;
                    counterLec++;
                }
            });
        }
    });
});