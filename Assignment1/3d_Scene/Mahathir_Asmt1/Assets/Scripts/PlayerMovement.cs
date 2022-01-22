using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Rigidbody birdbody;

    // Start is called before the first frame update
    void Start()
    {
        birdbody = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("Flapping");
            birdbody.AddForce(new Vector3(0, 5, 0), ForceMode.Impulse);


        }
    }
}
