
/******************************************************************************/
/******************************************************************************/

function getRandom(min,max)
{
	return((Math.floor(Math.random()*(max-min)))+min);
}

/******************************************************************************/

function blockForm(formId,action)
{
	if(action=='block')
		$('#'+formId).find('.block').block({message:false,overlayCSS:{opacity:'0.3'}});
	else $('#'+formId).find('.block').unblock();
}

/******************************************************************************/
/******************************************************************************/

