#pragma strict
var wheelFL : WheelCollider;
var wheelFR : WheelCollider;
var wheelRL : WheelCollider;
var wheelRR : WheelCollider;
var wheelFLTrans : Transform;
var wheelFRTrans : Transform;
var wheelRLTrans : Transform;
var wheelRRTrans : Transform;
var maxTorque : float = 5;
var eulerTest : Vector3;

function Start ()
{
	rigidbody.centerOfMass.y = -0.9;
}

function FixedUpdate ()
{
	wheelRR.motorTorque = maxTorque * Input.GetAxis("Vertical") * -1;
	wheelRL.motorTorque = maxTorque * Input.GetAxis("Vertical") * -1;
	wheelFL.steerAngle = 10 * Input.GetAxis("Horizontal");
	wheelFR.steerAngle = 10 * Input.GetAxis("Horizontal");
}

function Update ()
{
	wheelFLTrans.RotateAroundLocal(Vector3(1,0,0), wheelFL.rpm / 60 * 360 * Time.deltaTime / 100 * -1);
	wheelFRTrans.RotateAroundLocal(Vector3(1,0,0), wheelFL.rpm / 60 * 360 * Time.deltaTime / 100);
	wheelRLTrans.RotateAroundLocal(Vector3(1,0,0), wheelFL.rpm / 60 * 360 * Time.deltaTime / 100);
	wheelRRTrans.RotateAroundLocal(Vector3(1,0,0), wheelFL.rpm / 60 * 360 * Time.deltaTime / 100 * -1);
	wheelFLTrans.eulerAngles.y = 30;// wheelFL.steerAngle / 10;// - wheelFLTrans.localEulerAngles.z;

	eulerTest = wheelFLTrans.localEulerAngles;
}