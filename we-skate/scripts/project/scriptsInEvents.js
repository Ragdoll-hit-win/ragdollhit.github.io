


const scriptsInEvents = {

	async Game_Event21_Act4(runtime, localVars)
	{
		self.addEventListener('keydown', ev => {
		    if (['ArrowDown', 'ArrowUp', ' '].includes(ev.key)) {
		        ev.preventDefault();
		    }
		});
		self.addEventListener('wheel', ev => ev.preventDefault(), { passive: false });
	},

	async Game_Event21_Act6(runtime, localVars)
	{
		c3canvas.style.webkitUserSelect=c3canvas.style.msUserSelect=c3canvas.style.userSelect="none";
	},

	async Game_Event521_Act1(runtime, localVars)
	{
		myFileChooser.click();
	},

	async Create_Event10_Act1(runtime, localVars)
	{
		var global = Function('return this')(); //get global scope.
		
		global.openFileDialog = function(fileType) {
		 // this function must be called from  a user
		 // activation event (ie an onclick event)
		
		    // Create an input element
		    var inputElement = document.createElement("input");
		
		    // Set its type to file
		    inputElement.type = "file";
		
		    // Set accept to the file types you want the user to select.
		    // Include both the file extension and the mime type
		    //inputElement.accept = ".json,application/json";
			inputElement.accept = ".map,application/map";
		    // set onchange event to call callback when user has selected file
		    inputElement.addEventListener("change", function (event) {
		
		    [...this.files].forEach(file => {
		       var s = file.name;
		      // console.log(s);
		var url = URL.createObjectURL(file);
		
		        c3_callFunction("GetFileFromDialog", [url,s]);
		    });
		
		     } );
		
		    // dispatch a click event to open the file dialog
		    inputElement.dispatchEvent(new MouseEvent("click"));
		};
	},

	async Create_Event11_Act1(runtime, localVars)
	{
		openFileDialog();
	},

	async Create_Event115_Act1(runtime, localVars)
	{
		openFileDialog();
	},

	async Sdk_Event51_Act1(runtime, localVars)
	{
		PokiSDK.customEvent(localVars.Game, localVars.Segment, { label: localVars.Level, value: localVars.Value });
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

