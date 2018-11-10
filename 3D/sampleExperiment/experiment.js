var Sph;
var Cyl;
var cube;
var cuboid;
var cone;


var VelX;           /* X Velocity Slider Label */
var VelY;           /* Y Velocity Slider Label */
var Xdefault;       /* X Position Slider Default Value */
var Ydefault;       /* Y Position Slider Default Value */
var VXdefault;      /* X Velocity Slider Default Value */
var VYdefault;      /* Y Velocity Slider Default Value */
var AYdefault;      /* Y Acceleration Slider Default Value */
var Xmin;           /* X Position Slider Minimum Value */
var Xmax;           /* X Position Slider Maximum Value */
var Ymin;           /* Y Position Slider Minimum Value */
var Ymax;           /* Y Position Slider Maximum Value */
var VXmin;          /* X Velocity Slider Minimum Value */
var VXmax;          /* X Velocity Slider Maximum Value */
var VYmin;          /* Y Velocity Slider Minimum Value */
var VYmax;          /* Y Velocity Slider Maximum Value */
var AYmin;          /* Y Acceleration Slider Minimum Value */
var AYmax;          /* Y Acceleration Slider Maximum Value */
var VXstep;         /* X Velocity Slider Step */
var VYstep;         /* Y Velocity Slider Step */


//SPHERE
var Sphere = document.createElement("button");
Sphere.innerHTML = "Sphere";
Sphere.style.margin=8+'px';
Sphere.style.padding=5+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Sphere);

Sphere.addEventListener ("click", function() {
resetExperiment();

	Sph = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius+1,32, 32), new THREE.MeshLambertMaterial({color:0x003399,transparent:true, 	opacity:0.8}));
	Sph.position.set(myBallX, myBallY, myBallZ);
	Sph.castShadow = true;
        Sph.receiveShadow = true;
	PIEaddElement(Sph);
	Sph.rotation.x=-1.2 * Math.PI;

	//Examples
	
	THREE.ImageUtils.crossOrigin = '';
	var SphereTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/gX0ImSV.png');

	//var SphereTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/sphere-figures.png' ); 
	//SphereTexture.crossOrigin = true;
	SphereTexture.wrapS = SphereTexture.wrapT = THREE.RepeatWrapping; 
	SphereTexture.repeat.set( 1, 1 );
	var SphereMaterial = new THREE.MeshBasicMaterial( { map: SphereTexture, side: THREE.DoubleSide } );
	var SphereGeometry = new THREE.PlaneGeometry(4,4);
	var spher = new THREE.Mesh(SphereGeometry, SphereMaterial);
	spher.position.set(myBallX+6, myBallY, myBallZ);
	 
	PIEaddElement(spher);
	
	var text1 = document.createElement('div');
		text1.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text1.style.fontSize="xx-large";
		text1.style.color = "black";
		text1.innerHTML = "Examples";
		text1.style.top = 190 + 'px';
		text1.style.left =800 + 'px';
		document.body.appendChild(text1);	

	var text2 = document.createElement('div');
	text2.style.position = 'absolute';
	//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
	text2.style.width = 1500;
	text2.style.height = 1500;
	text2.style.fontSize="xx-large";
	text2.style.color = "black";
	text2.innerHTML = "A Sphere has no faces,\nedges and\n vertcies";
	text2.style.top = 630 + 'px';
	text2.style.left =300 + 'px';
	document.body.appendChild(text2);
	handleVX(Sph);
	handleVY(Sph);

	PIErender();

});


resetExperiment();


//CYLINDER
var Cylinder = document.createElement("button");
Cylinder.innerHTML = "Cylinder";
Cylinder.style.margin=8+'px';
Cylinder.style.padding=5+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Cylinder);
Cylinder.addEventListener ("click", function() {
resetExperiment();

	Cyl = new THREE.Mesh(new THREE.CylinderGeometry(myBallRadius,myBallRadius,3,32, 32), new THREE.MeshLambertMaterial			   (  {color:0xaf1c4a,transparent:true, opacity:0.8}));
	Cyl.position.set(myBallX-1, myBallY, myBallZ);
	PIEaddElement(Cyl);
	Cyl.rotation.x=-1.2 * Math.PI;

	//Explanation of the Cylinder
	THREE.ImageUtils.crossOrigin = '';
	var CylTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/wXrMsnd.jpg');

	//var CylTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/parts-of-a-cylinder.jpg' ); 
	//CylTexture.crossOrigin = true;
	CylTexture.wrapS = CylTexture.wrapT = THREE.RepeatWrapping; 
	CylTexture.repeat.set( 1, 1 );
	var CylMaterial = new THREE.MeshBasicMaterial( { map: CylTexture, side: THREE.DoubleSide } );
	var CylGeometry = new THREE.PlaneGeometry(4,3);
	var Cyld = new THREE.Mesh(CylGeometry, CylMaterial);
	Cyld.position.set(myBallX+4, myBallY, myBallZ);

	PIEaddElement(Cyld);

	//Examples of Cylindrical objects
	var CyleTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/iDmpyE8.jpg');

	//var CyleTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/education-cylinders.jpg' ); 
	//CyleTexture.crossOrigin = true;
	CyleTexture.wrapS = CyleTexture.wrapT = THREE.RepeatWrapping; 
	CyleTexture.repeat.set( 1, 1 );
	var CyleMaterial = new THREE.MeshBasicMaterial( { map: CyleTexture, side: THREE.DoubleSide } );
	var CyleGeometry = new THREE.PlaneGeometry(3,3);
	var cyle = new THREE.Mesh(CyleGeometry, CyleMaterial);
	cyle.position.set(myBallX+8, myBallY, myBallZ);

	PIEaddElement(cyle);

	//TEXT

	var text1 = document.createElement('div');
		text1.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text1.style.fontSize="xx-large";
		text1.style.color = "black";
		text1.innerHTML = "Details";
		text1.style.top = 210 + 'px';
		text1.style.left =620 + 'px';
		document.body.appendChild(text1);

	var text2 = document.createElement('div');
		text2.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text2.style.fontSize="xx-large";
		text2.style.color = "black";
		text2.innerHTML = "Examples";
		text2.style.top = 210 + 'px';
		text2.style.left =1000 + 'px';
		document.body.appendChild(text2);

	var text3 = document.createElement('div');
		text3.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text3.style.fontSize="xx-large";
		text3.style.color = "black";
		text3.innerHTML = "CYLINDER";
		text3.style.top = 125 + 'px';
		text3.style.left =20 + 'px';
		document.body.appendChild(text3);

		handleVX(Cyl);
		handleVY(Cyl);
	PIErender();


});

//CUBE

var Cube = document.createElement("button");
Cube.innerHTML = "Cube";
Cube.style.margin=8+'px';
Cube.style.padding=5+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Cube);
Cube.addEventListener ("click", function() {

	cube = new THREE.Mesh(new THREE.BoxGeometry(myBallRadius+1,myBallRadius+1,myBallRadius+1), new THREE.MeshLambertMaterial({color:0x2d52b7,transparent:true, opacity:0.8}));
	cube.position.set(myBallX-1.25, myBallY, myBallZ);

	PIEaddElement(cube);
	cube.rotation.x=-1.2 * Math.PI;

//Explanation of the Cube
	THREE.ImageUtils.crossOrigin = '';
	var CubeTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/3dIQBRR.jpg');

	//var CubeTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/parts-of-a-cube.jpg' ); 
	//CubeTexture.crossOrigin = true;
	CubeTexture.wrapS = CubeTexture.wrapT = THREE.RepeatWrapping; 
	CubeTexture.repeat.set( 1, 1 );
	var CubeMaterial = new THREE.MeshBasicMaterial( { map: CubeTexture, side: THREE.DoubleSide } );
	var CubeGeometry = new THREE.PlaneGeometry(4,3);
	var Cubed = new THREE.Mesh(CubeGeometry, CubeMaterial);
	Cubed.position.set(myBallX+3, myBallY, myBallZ);

	PIEaddElement(Cubed);

	//Examples of Cubical objects
	var CubeeTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/SHWkHaj.jpg');

	//var CubeeTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/examplecube.jpg' ); 
	//CubeeTexture.crossOrigin = true;
	CubeeTexture.wrapS = CubeeTexture.wrapT = THREE.RepeatWrapping; 
	CubeeTexture.repeat.set( 1, 1 );
	var CubeeMaterial = new THREE.MeshBasicMaterial( { map: CubeeTexture, side: THREE.DoubleSide } );
	var CubeeGeometry = new THREE.PlaneGeometry(4.5,3);
	var cubee = new THREE.Mesh(CubeeGeometry, CubeeMaterial);
	cubee.position.set(myBallX+8, myBallY, myBallZ);

		

	PIEaddElement(cubee);

	//TEXT

	var text1 = document.createElement('div');
		text1.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text1.style.fontSize="xx-large";
		text1.style.color = "black";
		text1.innerHTML = "Details";
		text1.style.top = 210 + 'px';
		text1.style.left =500 + 'px';
		document.body.appendChild(text1);

	var text2 = document.createElement('div');
		text2.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text2.style.fontSize="xx-large";
		text2.style.color = "black";
		text2.innerHTML = "Examples";
		text2.style.top = 210 + 'px';
		text2.style.left =1000 + 'px';
		document.body.appendChild(text2);

	var text3 = document.createElement('div');
		text3.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text3.style.fontSize="xx-large";
		text3.style.color = "black";
		text3.innerHTML = "CUBE";
		text3.style.top = 175 + 'px';
		text3.style.left =60 + 'px';
		document.body.appendChild(text3);
		handleVX(cube);
		handleVY(cube);
	
	    PIErender();

	});


//CUBOID

var Cuboid = document.createElement("button");
Cuboid.innerHTML = "Cuboid";
Cuboid.style.margin=8+'px';
Cuboid.style.padding=5+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Cuboid);
Cuboid.addEventListener ("click", function() {
   
	 cuboid = new THREE.Mesh(new THREE.BoxGeometry(myBallRadius+1.65,myBallRadius+1,myBallRadius+1), new THREE.MeshLambertMaterial		({color:0x4bba23,transparent:true, opacity:0.8}));
	    cuboid.position.set(myBallX-1, myBallY, myBallZ);
	PIEaddElement(cuboid);
	cuboid.rotation.x=-1.2 * Math.PI;

//Explanation of the Cuboid
	THREE.ImageUtils.crossOrigin = '';
	var CudTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/Ylcwodp.jpg');

	//var CudTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/parts-of-a-cuboid.jpg' ); 
	//CudTexture.crossOrigin = true;
	CudTexture.wrapS = CudTexture.wrapT = THREE.RepeatWrapping; 
	CudTexture.repeat.set( 1, 1 );
	var CudMaterial = new THREE.MeshBasicMaterial( { map: CudTexture, side: THREE.DoubleSide } );
	var CudGeometry = new THREE.PlaneGeometry(5,3);
	var Cudd = new THREE.Mesh(CudGeometry, CudMaterial);
	Cudd.position.set(myBallX+3.5, myBallY, myBallZ);

	PIEaddElement(Cudd);

	//Examples of Cuboidal objects

	var CudeTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/x5YGry8.jpg');

	//var CudeTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/examplecuboid.jpg' ); 
	//CudeTexture.crossOrigin = true;
	CudeTexture.wrapS = CudeTexture.wrapT = THREE.RepeatWrapping; 
	CudeTexture.repeat.set( 1, 1 );
	var CudeMaterial = new THREE.MeshBasicMaterial( { map: CudeTexture, side: THREE.DoubleSide } );
	var CudeGeometry = new THREE.PlaneGeometry(4,3);
	var cude = new THREE.Mesh(CudeGeometry, CudeMaterial);
	cude.position.set(myBallX+8.75, myBallY, myBallZ);

	PIEaddElement(cude);

	//TEXT

	var text1 = document.createElement('div');
		text1.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text1.style.fontSize="xx-large";
		text1.style.color = "black";
		text1.innerHTML = "Details";
		text1.style.top = 210 + 'px';
		text1.style.left =500 + 'px';
		document.body.appendChild(text1);

	var text2 = document.createElement('div');
		text2.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text2.style.fontSize="xx-large";
		text2.style.color = "black";
		text2.innerHTML = "Examples";
		text2.style.top = 210 + 'px';
		text2.style.left =1000 + 'px';
		document.body.appendChild(text2);

	var text3 = document.createElement('div');
		text3.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text3.style.fontSize="xx-large";
		text3.style.color = "black";
		text3.innerHTML = "CUBOID";
		text3.style.top = 175 + 'px';
		text3.style.left =60 + 'px';
		document.body.appendChild(text3);

	PIErender();

});

//CONE

var Cone = document.createElement("button");
Cone.innerHTML = "Cone";
Cone.style.margin=8+'px';
Cone.style.padding=5+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Cone);
Cone.addEventListener ("click", function() {

	cone = new THREE.Mesh(new THREE.ConeGeometry(myBallRadius+1,3,25), new THREE.MeshLambertMaterial({color:0x440491,transparent:true, 		opacity:0.7}));
	cone.position.set(myBallX-0.35, myBallY+0.25, myBallZ);
	PIEaddElement(cone);
	cone.rotation.y=-1.2 * Math.PI;
	cone.rotation.x=-0.2 * Math.PI;


//Explanation of the Cone
	THREE.ImageUtils.crossOrigin = '';
	var ConeTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/Oj6sQ05.jpg');

	//var ConeTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/parts-of-a-cone.jpg' ); 
	//ConeTexture.crossOrigin = true;
	ConeTexture.wrapS = ConeTexture.wrapT = THREE.RepeatWrapping; 
	ConeTexture.repeat.set( 1, 1 );
	var ConeMaterial = new THREE.MeshBasicMaterial( { map: ConeTexture, side: THREE.DoubleSide } );
	var ConeGeometry = new THREE.PlaneGeometry(4,3);
	var Coned = new THREE.Mesh(ConeGeometry, ConeMaterial);
	Coned.position.set(myBallX+4, myBallY, myBallZ);

	PIEaddElement(Coned);

	//Examples of Conical objects

	var ConeeTexture = THREE.ImageUtils.loadTexture('http://i.imgur.com/KiTbr1I.jpg');

	//var ConeeTexture = new THREE.ImageUtils.loadTexture( '../PIE/images/clever-red-white-breakfast-dishes.jpg' ); 
	//ConeeTexture.crossOrigin = true;
	ConeeTexture.wrapS = ConeeTexture.wrapT = THREE.RepeatWrapping; 
	ConeeTexture.repeat.set( 1, 1 );
	var ConeeMaterial = new THREE.MeshBasicMaterial( { map: ConeeTexture, side: THREE.DoubleSide } );
	var ConeeGeometry = new THREE.PlaneGeometry(4,3);
	var conee = new THREE.Mesh(ConeeGeometry, ConeeMaterial);
	conee.position.set(myBallX+8.75, myBallY, myBallZ);

	PIEaddElement(conee);

	//TEXT

	var text1 = document.createElement('div');
		text1.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text1.style.fontSize="xx-large";
		text1.style.color = "black";
		text1.innerHTML = "Details";
		text1.style.top = 210 + 'px';
		text1.style.left =500 + 'px';
		document.body.appendChild(text1);

	var text2 = document.createElement('div');
		text2.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text2.style.fontSize="xx-large";
		text2.style.color = "black";
		text2.innerHTML = "Examples";
		text2.style.top = 210 + 'px';
		text2.style.left =1000 + 'px';
		document.body.appendChild(text2);

	var text3 = document.createElement('div');
		text3.style.position = 'absolute';
		//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this.
		text3.style.fontSize="xx-large";
		text3.style.color = "black";
		text3.innerHTML = "CONE";
		text3.style.top = 175 + 'px';
		text3.style.left =60 + 'px';
		document.body.appendChild(text3);

	PIErender();

});

//REFRESH
var Clear = document.createElement("button");
Clear.innerHTML = "Clear";
Clear.style.margin=10+'px';
Clear.style.padding=9+'px';
var body = document.getElementsByTagName("body")[0];
body.appendChild(Clear);
Clear.addEventListener ("click", function() {
location.reload();
});


/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */

//var myBack;             /* Back */


/* Ball variables */
var myBall;             /* Ball Object */
var myBallRadius;       /* Radius */
var myBallX;            /* X Position */
var myBallY;            /* Y Position */
var myBallZ;            /* Z Position for placing ball */



function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 6.0;
    mySceneBRX = 8.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    myBallZ    = -2.0;
}

function initialiseOtherVariables()
{
    /* Initialise variables */
    myBallRadius = mySceneW/10.0;
    wallThickness = 0.20;
    
     /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;

 
  
}

function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;



    PIEsetExperimentTitle("Three Dimensional Shapes");
    PIEsetDeveloperName("Krisha Mehta");
    PIEhideControlElement();

    /* initialise help and info content */
    //initialiseHelp();
    //initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    
 /* Back */
    
    geometry = new THREE.BoxGeometry( mySceneW * 2.15, mySceneH * 2, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow=true;
    PIEaddElement(myBack);


  
    
    /* Instantiate experiment controls */
   initialiseControls();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
function updateExperimentElements(t, dt)
{


cube.rotation.y += controls.VYmin;
cube.rotation.x += controls.VXmin;


 PIEchangeDisplayText(VelX, myBallVX);
 PIEchangeDisplayText(VelY, myBallVY);
}


/******************* End of Load Experiment objects code ***********************/


function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();

    /* Initialise Ball variables */
    myBallX      = myCenterX-4;
    myBallY      = myCenterY;
    

    /* Reset Ball position */
  //  myBall.position.set(myBallX, myBallY, myBallZ);

    /* Reset Wall position */
    
   // myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
}
function initialiseControlVariables()
{
/* Labels */
   // PosX="X";                  /* X Position Slider Label */
   // PosY="Y";                  /* Y Position Slider Label */
    VelX="VX";                 /* X Velocity Slider Label */
    VelY="VY";                 /* Y Velocity Slider Label */
   // AccY="AY";                 /* Y Acceleration Slider Label */

    /* Default (initial) Values */
   // Xdefault=myCenterX;        /* X Position Slider Default Value */
   // Ydefault=myCenterY;        /* Y Position Slider Default Value */
    VXdefault=0.1;             /* X Velocity Slider Default Value */
    VYdefault=0.1;             /* Y Velocity Slider Default Value */
   // AYdefault=-9.8;            /* Y Acceleration Slider Default Value */

    /* Slider Limits */
   // Xmin=leftB+myBallRadius;   /* X Position Slider Minimum Value */
 //   Xmax=rightB-myBallRadius;  /* X Position Slider Maximum Value */
   // Ymin=bottomB+myBallRadius; /* Y Position Slider Minimum Value */
//    Ymax=topB-myBallRadius;    /* Y Position Slider Maximum Value */
    VXmin=0.0;                /* X Velocity Slider Minimum Value */
    VXmax= 2.0;                /* X Velocity Slider Maximum Value */
    VYmin=0.0;                /* Y Velocity Slider Minimum Value */
    VYmax= 2.0;                /* Y Velocity Slider Maximum Value */
   // AYmin=-15.0;               /* Y Acceleration Slider Maximum Value */
   // AYmax= 0.0;                /* Y Acceleration Slider Minimum Value */

    /* Slider Steps */
//    Xstep=0.1;                 /* X Position Slider Step */
  //  Ystep=0.1;                  /* Y Position Slider Step */
    VXstep=0.1;                 /* X Velocity Slider Step */
    VYstep=0.1;                 /* Y Velocity Slider Step */
   // AYstep=-0.1;               /* Y Acceleration Slider Step */
}

var controls = new function () {
            this.VXmin = 0.02;
            this.VYmin = 0.03;
        };

function handleVX(newvalue){

myBallVX=newvalue;

PIErender();
}


function handleVY(newvalue){

myBallVY=newvalue;

PIErender();
}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(VelX, VXdefault, handleVX, VXmin, VXmax, VXstep);
    PIEaddInputSlider(VelY, VYdefault, handleVY, VYmin, VYmax, VYstep);

    /* Create Display Panel */
   
    PIEaddDisplayText(VelX, VXdefault,VXmin,VXmax);
    PIEaddDisplayText(VelY, VYdefault);
    
}


