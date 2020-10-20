var job = prompt("Enter your job");
        var loc = prompt("Enter your current country");
        var pName = prompt("Enter your Partner's name");
        var NoChildreen = prompt("how many childreen have you ?");

        var obj = { NoChildreen: 0, pName: "", loc: "", job: "" }


        function tellFortune(NoChildreen, pName, loc, job) {


            obj.NoChildreen = NoChildreen;

            obj.pName = pName;
            obj.loc = loc;
            obj.job = job


            console.log("You will be a", obj.job, "in", obj.loc, ", and married to", obj.pName, "with", obj.NoChildreen, "kids.")

        }

        tellFortune(NoChildreen, pName, loc, job);