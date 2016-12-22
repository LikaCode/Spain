var countQuest = 0;
	var plus = 0;
	var test_start = 0;
	function check(num){
		if(num == 4){ 
			document.getElementById('area').style.display='block'; 
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline';
			if(test_start == 0){
				var questions = ["What is the capital of Spain?",
				"When was the country founded?","What football club is the current champion of La Liga?",
				"For what period of time the Spanish national football team topped the FIFA World rankings?"];
				var number1 = ["Madrid","1497","Malaga","2008-2012"];	
				var number2 = ["Barcelona","1492","Sevilla","2009-2013"];	
				var number3 = ["Milan","1484","FC Barcelona","2009-2012"];	
				var number4 = ["London","1478","Atletico Madrid","2008-2013"]
				document.getElementById('question').innerHTML=questions[countQuest];
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];
				var answer = [0,1,2,3];
				test_start = 1;	
			}
		}
		else{
				var questions = ["What is the capital of Spain?",
				"When was the country founded?","What football club is the current champion of La Liga?",
				"For what period of time the Spanish national football team topped the FIFA World rankings?"];
				var number1 = ["Madrid","1497","Malaga","2008-2012"];	
				var number2 = ["Barcelona","1492","Sevilla","2009-2013"];	
				var number3 = ["Milan","1484","FC Barcelona","2009-2012"];	
				var number4 = ["London","1478","Atletico Madrid","2008-2013"];
			var answer = [0,1,2,3];
			if(num == answer[countQuest]) plus++;
			if(questions.length - 1> countQuest){
				countQuest++;
				document.getElementById('question').innerHTML=questions[countQuest];
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];
			}
			else{ 
				document.getElementById('area').style.display='none';
				alert('You have ' + plus + ' right answers');
			}
		}
	}