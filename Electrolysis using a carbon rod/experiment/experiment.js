var pspheres1 = []; //copper particles
var pspheres = [];  //copper particles on carbon rodd
var bspheres = [];  //Bubbles

var initAnim = true;
var runAnim = false;
var isPlay = false;
var theta = 0;
var renderer,scene,camera;

var startButton = document.createElement("button");
startButton.innerHTML = "on";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(startButton);

var resetButton = document.createElement("button");
resetButton.innerHTML = "off";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(resetButton);

var help = document.createElement("button");
help.innerHTML = "help";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(help);
help.addEventListener ("click", function() {
  alert("Basic electroplating using carbon rod help.\nBasic electroplating using carbon rod.\n The experiment shows a beaker with two electrodes immersed in it.\nThe top line has animation controls. There are two states of the experiment.\nThe on button completes the circuit and the off button disconnects it.\n happy experimenting");
});

var info = document.createElement("button");
info.innerHTML = "info";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(info);
info.addEventListener ("click", function() {
alert("Basic electroplating using carbon rod concepts.\n\nThe copper sulfate solution is an electrolyte that conducts electricity from one electrode to the other.\n When the current is flowing, oxidation (loss of electrons) happens at the copper anode, adding copper ions to the solution. Those ions travel on the electric current to the carbon rod(cathode), where reduction (gain of electrons) happens, plating the copper ions onto it.\n There were already copper ions present in the copper sulfate solution before you started, but the oxidation reaction at the anode kept replacing them in the solution as they were plated onto the key, keeping the reaction going.\n\n Happy expertimenting")
});

var exp = document.createElement("h3");
exp.innerHTML = "Name: Basic electrolysis with carbon rod  Created by:Krisha Mehta";
var body = document.getElementsByTagName("body")[0];
body.appendChild(exp);

    // once everything is loaded, we run our Three.js stuff.
    function init() {


	var container = document.createElement( 'div' );
	document.body.appendChild( container );





        // create a scene, that will hold all our elements such as objects, cameras and lights.
         scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
	 camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 );
	camera.position.z = 3;
	camera.focalLength = 3;
	 // position and point the camera to the center of the scene
       camera.position.x = 30;
        camera.position.y = 10;
        camera.position.z = 30;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

	//Buttons

	startButton.onclick = function StartAnimation() {

	  if (initAnim) {
	    initAnim = false;
	    runAnim = true;
	    theta = 0;



	  }
	  // Start and Pause 
	  if (runAnim) { 
	    startButton.innerHTML = 'pause';
	    runAnim = false;
	    isPlay = true;
	    animate();
	    } else {
		  startButton.innerHTML = 'on';
		  runAnim = true;
		  isPlay = false;
	    }
  }

	resetButton.onclick = function ResetParameters() {

   // Set StartButton to Start  
   startButton.innerHTML = 'on';

   // Boolean for Stop Animation
   initAnim = true;
   runAnim = false;
   theta = 0;
   isPlay = false;
   render();
   }

        // create a render and set the size
        renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

	// create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(250, 300);
	// var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});


        var planeMaterial = new THREE.MeshBasicMaterial({color:0x2F2F2F });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        // rotate and position the plane

	plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
	plane.position.x = -10;
        plane.position.y = -20;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);

      

	
	// create the back plane
        var planeGeometry = new THREE.PlaneGeometry(500, 300);
	// var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});


        var planeMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF });
        var bplane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        // rotate and position the plane

	bplane.rotation.y = 0.25 * Math.PI;
        bplane.position.x = -35;

        //bplane.position.y = 20;
        bplane.position.z = -35;
	
        // add the plane to the scene
        scene.add(bplane);

	// Main flask lower half

	var geom = new THREE.CylinderGeometry( 10, 10, 10,200,200 );
	var mater = new THREE.MeshBasicMaterial( {color:0x003399,transparent:true, opacity:0.4,wireframe:false} );	 
	var cylinder3 = new THREE.Mesh( geom, mater );

	cylinder3.position.x=0;
	cylinder3.position.y=0;
	cylinder3.position.z=0;
	scene.add( cylinder3 );
	// Main flask upper half
	var geom1 = new THREE.CylinderGeometry( 10, 10, 6,200,200 );
	var mater1 = new THREE.MeshBasicMaterial( {color:0x003399,transparent:true, opacity:0.1,wireframe:false} );	 
	var cylinder4 = new THREE.Mesh( geom1, mater1 );

	cylinder4.position.x=0;
	cylinder4.position.y=7;
	cylinder4.position.z=0;
	scene.add( cylinder4 );
	
	// rod 1
	var geometry = new THREE.CylinderGeometry( 1, 1, 12, 300,300 );
	var material = new THREE.MeshBasicMaterial( {color:0x525252} );	 
	var cylinder = new THREE.Mesh( geometry, material );

	cylinder.position.x=0;
	cylinder.position.y=6;
	cylinder.position.z=5;
	scene.add( cylinder );

	// rod 2
        var geometry = new THREE.CylinderGeometry( 1, 1, 12, 200,200 );
	var mat = new THREE.MeshBasicMaterial( {color:0xCC3300} );	 
	var cylinder1 = new THREE.Mesh( geometry, mat );

	cylinder1.position.x=5;
	cylinder1.position.y=6;
	cylinder1.position.z=0;
	scene.add( cylinder1 );
	
	//Bubbles
	var geometry1 = new THREE.SphereGeometry( 0.1, 32, 16 )
	var material1 = new THREE.MeshBasicMaterial( { color:0x2E7CC3} );
        var bspheres=[];
	for ( var i = 0; i < 230; i ++ ) {

		var mesh1 = new THREE.Mesh( geometry1, material1 );
		mesh1.position.x = Math.random() * 7 - 2;
		mesh1.position.y = Math.random() * 10 - 5;
		mesh1.position.z = Math.random() * 2 - 5;

		mesh1.scale.x = mesh1.scale.y = mesh1.scale.z = 1.3;

		scene.add( mesh1 );

		bspheres.push( mesh1 );

	}

	//Wires1

	var lineMaterial = new THREE.LineBasicMaterial({color: 0x000000});
	var lineGeometry = new THREE.Geometry();	
	lineGeometry.vertices.push(
	new THREE.Vector3( 5, 11, 0 ),
	new THREE.Vector3( 2, 11, 2 ),
	new THREE.Vector3( 0, 11, 5 )
	);

	var line = new THREE.Line( lineGeometry, lineMaterial );
	scene.add( line );


	
	//Battery
	var bgeometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 200,200 );
	var bmat = new THREE.MeshBasicMaterial( {color:0x000000} );	 
	var bcylinder = new THREE.Mesh( bgeometry, bmat );

	bcylinder.position.x=3;
	bcylinder.position.y= 10.90;
	bcylinder.position.z=3;
	scene.add( bcylinder );
	
	 bcylinder.rotation.x = -0.45 * Math.PI;
    
	//particles

	window.setTimeout(staticBubbles,8000);	
				
	//timer set for static copper particles	
	
	
			
				
		var geometry = new THREE.SphereBufferGeometry( 0.1, 32, 16 );
		var material = new THREE.MeshBasicMaterial( { color: 0xdd2121 } );
		for ( var i = 0; i < 450; i ++ ) {
			var pmesh = new THREE.Mesh( geometry, material );
			pmesh.position.x =Math.random()*-7 - 1;
			pmesh.position.y = Math.random() *7  - 2;
			pmesh.position.z = Math.random()*-11- (-2);
			pmesh.scale.x = pmesh.scale.y = pmesh.scale.z = 1;
			scene.add( pmesh );
			pspheres1.push( pmesh );
				}
	
	
	
    
        // add the output of the renderer to the html element
	container.appendChild( renderer.domElement );

        // call the render function
        var step = 0;
  }
    window.onload = init;





function animate(delta) {
console.log(runAnim);
    if (!isPlay) return;
    requestAnimationFrame(animate);
    theta += 0.01;
    render();
}

function render() {


	    var timer = 0.0004 * Date.now();
	 var timer1 = 0.0002 * Date.now();
	    for ( var i = 0, il = bspheres.length; i < il; i ++ ) {

	       var sphere = bspheres[ i ];

            sphere.position.y = 5 * Math.sin( timer + i * 1.1 );
            
		}
	 for ( var i = 0, il = pspheres1.length; i < il; i ++ ) {

	       var sphere = pspheres1[ i ];

		sphere.position.z=5 * Math.sin( timer1 + i * 1.1 );;
            
		}

	var ptimer = 0.00005 * Date.now();
				

		for ( var i = 0, il = pspheres.length; i < il; i ++ ) {
				
			var psphere = pspheres[ i ];
			psphere.position.x = -1 * Math.cos( ptimer + i );
			psphere.position.z = 2 * Math.cos( ptimer + i );
			psphere.position.x = -6;
			
			
				}


            // render using requestAnimationFrame

            renderer.render(scene, camera);
        }

       function staticBubbles(){
var geometry = new THREE.SphereBufferGeometry( 0.1, 32, 16 );
		var material = new THREE.MeshBasicMaterial( { color: 0xdd2121 } );
		for ( var i = 0; i < 800; i ++ ) {
			var pmesh = new THREE.Mesh( geometry, material );
			pmesh.position.x =Math.random()*-7 - 1;
			pmesh.position.y = Math.random() * 7 - 2;
			pmesh.position.z = Math.random()*-4- (-2);
			pmesh.scale.x = pmesh.scale.y = pmesh.scale.z = 1;
			scene.add( pmesh );
			pspheres.push( pmesh );
				}



}


   


