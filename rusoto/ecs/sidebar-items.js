initSidebarItems({"enum":[["CreateClusterError",""],["CreateServiceError",""],["DeleteClusterError",""],["DeleteServiceError",""],["DeregisterContainerInstanceError",""],["DeregisterTaskDefinitionError",""],["DescribeClustersError",""],["DescribeContainerInstancesError",""],["DescribeServicesError",""],["DescribeTaskDefinitionError",""],["DescribeTasksError",""],["DiscoverPollEndpointError",""],["ListClustersError",""],["ListContainerInstancesError",""],["ListServicesError",""],["ListTaskDefinitionFamiliesError",""],["ListTaskDefinitionsError",""],["ListTasksError",""],["RegisterContainerInstanceError",""],["RegisterTaskDefinitionError",""],["RunTaskError",""],["StartTaskError",""],["StopTaskError",""],["SubmitContainerStateChangeError",""],["SubmitTaskStateChangeError",""],["UpdateContainerAgentError",""],["UpdateServiceError",""]],"struct":[["Attribute","<p>The attributes applicable to a container instance when it is registered.</p>"],["Cluster","<p>A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.</p>"],["Container","<p>A Docker container that is part of a task.</p>"],["ContainerDefinition","<p>Container definitions are used in task definitions to describe the different containers that are launched as part of a task.</p>"],["ContainerInstance","<p>An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.</p>"],["ContainerOverride","<p>The overrides that should be sent to a container.</p>"],["CreateClusterRequest",""],["CreateClusterResponse",""],["CreateServiceRequest",""],["CreateServiceResponse",""],["DeleteClusterRequest",""],["DeleteClusterResponse",""],["DeleteServiceRequest",""],["DeleteServiceResponse",""],["Deployment","<p>The details of an Amazon ECS service deployment.</p>"],["DeploymentConfiguration","<p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>"],["DeregisterContainerInstanceRequest",""],["DeregisterContainerInstanceResponse",""],["DeregisterTaskDefinitionRequest",""],["DeregisterTaskDefinitionResponse",""],["DescribeClustersRequest",""],["DescribeClustersResponse",""],["DescribeContainerInstancesRequest",""],["DescribeContainerInstancesResponse",""],["DescribeServicesRequest",""],["DescribeServicesResponse",""],["DescribeTaskDefinitionRequest",""],["DescribeTaskDefinitionResponse",""],["DescribeTasksRequest",""],["DescribeTasksResponse",""],["DiscoverPollEndpointRequest",""],["DiscoverPollEndpointResponse",""],["EcsClient","A client for the Amazon ECS API."],["Failure","<p>A failed resource.</p>"],["HostEntry","<p>Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. </p>"],["HostVolumeProperties","<p>Details on a container instance host volume.</p>"],["KeyValuePair","<p>A key and value pair object.</p>"],["ListClustersRequest",""],["ListClustersResponse",""],["ListContainerInstancesRequest",""],["ListContainerInstancesResponse",""],["ListServicesRequest",""],["ListServicesResponse",""],["ListTaskDefinitionFamiliesRequest",""],["ListTaskDefinitionFamiliesResponse",""],["ListTaskDefinitionsRequest",""],["ListTaskDefinitionsResponse",""],["ListTasksRequest",""],["ListTasksResponse",""],["LoadBalancer","<p>Details on a load balancer that is used with a service.</p>"],["LogConfiguration","<p>Log configuration options to send to a custom log driver for the container.</p>"],["MountPoint","<p>Details on a volume mount point that is used in a container definition.</p>"],["NetworkBinding","<p>Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>"],["PortMapping","<p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>"],["RegisterContainerInstanceRequest",""],["RegisterContainerInstanceResponse",""],["RegisterTaskDefinitionRequest",""],["RegisterTaskDefinitionResponse",""],["Resource","<p>Describes the resources available for a container instance.</p>"],["RunTaskRequest",""],["RunTaskResponse",""],["Service","<p>Details on a service within a cluster</p>"],["ServiceEvent","<p>Details on an event associated with a service.</p>"],["StartTaskRequest",""],["StartTaskResponse",""],["StopTaskRequest",""],["StopTaskResponse",""],["SubmitContainerStateChangeRequest",""],["SubmitContainerStateChangeResponse",""],["SubmitTaskStateChangeRequest",""],["SubmitTaskStateChangeResponse",""],["Task","<p>Details on a task in a cluster.</p>"],["TaskDefinition","<p>Details of a task definition.</p>"],["TaskOverride","<p>The overrides associated with a task.</p>"],["Ulimit","<p>The <code>ulimit</code> settings to pass to the container.</p>"],["UpdateContainerAgentRequest",""],["UpdateContainerAgentResponse",""],["UpdateServiceRequest",""],["UpdateServiceResponse",""],["VersionInfo","<p>The Docker and Amazon ECS container agent version information about a container instance.</p>"],["Volume","<p>A data volume used in a task definition.</p>"],["VolumeFrom","<p>Details on a data volume from another container.</p>"]],"type":[["AgentUpdateStatus",""],["Attributes",""],["Boolean",""],["BoxedBoolean",""],["BoxedInteger",""],["Clusters",""],["ContainerDefinitions",""],["ContainerInstances",""],["ContainerOverrides",""],["Containers",""],["Deployments",""],["DesiredStatus",""],["DockerLabelsMap",""],["Double",""],["EnvironmentVariables",""],["Failures",""],["HostEntryList",""],["Integer",""],["LoadBalancers",""],["LogConfigurationOptionsMap",""],["LogDriver",""],["Long",""],["MountPointList",""],["NetworkBindings",""],["NetworkMode",""],["PortMappingList",""],["RequiresAttributes",""],["Resources",""],["ServiceEvents",""],["Services",""],["SortOrder",""],["StringList",""],["TaskDefinitionFamilyStatus",""],["TaskDefinitionStatus",""],["Tasks",""],["Timestamp",""],["TransportProtocol",""],["UlimitList",""],["UlimitName",""],["VolumeFromList",""],["VolumeList",""]]});