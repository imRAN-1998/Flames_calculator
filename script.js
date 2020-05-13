const error=document.querySelector('.error');
function showDiv(msg)
{

	error.style.display='block';
	error.style.animationName='exp';
	error.style.animationDuration='2s';
	error.innerHTML=msg;
	setTimeout(()=>{
		error.style.display='none';
	},2000)
}

document.querySelector('.myform').addEventListener('submit',func1)
function func1(e){
	e.preventDefault();
		const span=document.querySelector('.span1');
		span.innerHTML='';
		document.querySelector('.inner-output').style.display='none';
	let u1=document.getElementById('user1');
	let u2=document.getElementById('user2');
	// console.log(u1.value.length,u2.value.length);
	let u1_t=u1.value.trim().toLowerCase();
	let u2_t=u2.value.trim().toLowerCase();
	// console.log(u1_t.length,u2_t.length);
	if(u1_t==''||u2_t=='')
	{
		showDiv('enter both the fields');
	}
	else if(u1_t===u2_t){
		showDiv('Enter different names');
	}else{
		let rel_ship=flames(u1_t,u2_t);
		if(rel_ship!==0)
		{
		u1.value='';
		u2.value='';
		document.querySelector('.inner-output').style.display='block';
		span.innerHTML=rel_ship;
		}
	}
	
}
function flames(u1,u2){
	let user1=u1.split('');
	let user2=u2.split('');
	let k1=0,k2=0;
	for(let i=0;i<user1.length;i++)
	{
		for(let j=0;j<user2.length;j++)
		{
			if(user1[i]===user2[j] && user1[i]!=="*" && user2[j]!=="*"){
				user1[i]="*";
				user2[j]="*";
				break;
			}
		}
		if(user1[i]!=="*")
		{
			k1++;
		}
	}
	user2.forEach(user=>{
		if(user!=="*"){
			k2++;
		}
	})
	let total=k1+k2;
	if(total==0)
	{
		showDiv('Entered names have same words but there shuffled')
		return 0;
	}
	else{
	let f=['F','L','A','M','E','S'],c;
	let i=1,j=0,z=0,l=6;
	while(1)
	{
		if(i==total)
		{
			c=f[j];
			for(let x=j;x<l-1;x++)
			{
				f[x]=f[x+1];
			}
			i=0;
			l--;
			j--;
		}
		j++;
		i++;
		if(j==l)
		{
			j=0;
		}
		if(l==0)
		{
			break;
		}
	}
	let rel='';
	switch(c)
	{
		case 'F':
		rel="FRIENDS";
		break;
		case 'L':
		rel="LOVERS";
		break;
		case 'A':
		rel="AFFECTIONATE";
		break;
		case 'M':
		rel="MARRIAGE";
		break;
		case 'E':
		rel="ENEMIES";
		break;
		case 'S':
		rel="SIBLINGS";
		break;

	}
	return rel;
}
}