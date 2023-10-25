function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K5MkydQyZr":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v15q1attempts:player.GetVar("v15q1attempts"),v15q1answeredcorrect:player.GetVar("v15q1answeredcorrect"),v15q2attempts:player.GetVar("v15q2attempts"),v15q2answeredcorrect:player.GetVar("v15q2answeredcorrect"),v15q3attempts:player.GetVar("v15q3attempts"),v15q3answeredcorrect:player.GetVar("v15q3answeredcorrect")})
	}
	)
}

