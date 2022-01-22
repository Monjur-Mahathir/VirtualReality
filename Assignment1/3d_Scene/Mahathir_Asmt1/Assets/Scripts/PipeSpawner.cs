using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PipeSpawner : MonoBehaviour
{
    float currTime;
    float wallHeight;
    [SerializeField] GameObject wallPrefab;
    [SerializeField] GameObject wallPrefab2;
    [SerializeField] Transform spawnPoint;
    GameObject currWall;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        spawnWall();
    }

    void spawnWall()
    {
        if (Time.time > currTime)
        {
            createWallHeight();
            PipeDirection();

            Instantiate(currWall, new Vector3(spawnPoint.position.x, wallHeight, spawnPoint.position.z), Quaternion.identity, transform);
            currTime = Time.time + 2;
        }
    }

    void createWallHeight()
    {
        wallHeight = Random.Range(-2.0f, 2.0f);
    }

    void PipeDirection()
    {
        int dirIndex = Random.Range(0, 2);
        if(dirIndex == 0)
        {
            currWall = wallPrefab;
        }
        else
        {
            currWall = wallPrefab2;
        }
    }
}
