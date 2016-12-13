initSidebarItems({"enum":[["ActivateGatewayError",""],["AddCacheError",""],["AddTagsToResourceError",""],["AddUploadBufferError",""],["AddWorkingStorageError",""],["CancelArchivalError",""],["CancelRetrievalError",""],["CreateCachediSCSIVolumeError",""],["CreateSnapshotError",""],["CreateSnapshotFromVolumeRecoveryPointError",""],["CreateStorediSCSIVolumeError",""],["CreateTapeWithBarcodeError",""],["CreateTapesError",""],["DeleteBandwidthRateLimitError",""],["DeleteChapCredentialsError",""],["DeleteGatewayError",""],["DeleteSnapshotScheduleError",""],["DeleteTapeArchiveError",""],["DeleteTapeError",""],["DeleteVolumeError",""],["DescribeBandwidthRateLimitError",""],["DescribeCacheError",""],["DescribeCachediSCSIVolumesError",""],["DescribeChapCredentialsError",""],["DescribeGatewayInformationError",""],["DescribeMaintenanceStartTimeError",""],["DescribeSnapshotScheduleError",""],["DescribeStorediSCSIVolumesError",""],["DescribeTapeArchivesError",""],["DescribeTapeRecoveryPointsError",""],["DescribeTapesError",""],["DescribeUploadBufferError",""],["DescribeVTLDevicesError",""],["DescribeWorkingStorageError",""],["DisableGatewayError",""],["ListGatewaysError",""],["ListLocalDisksError",""],["ListTagsForResourceError",""],["ListTapesError",""],["ListVolumeInitiatorsError",""],["ListVolumeRecoveryPointsError",""],["ListVolumesError",""],["RemoveTagsFromResourceError",""],["ResetCacheError",""],["RetrieveTapeArchiveError",""],["RetrieveTapeRecoveryPointError",""],["SetLocalConsolePasswordError",""],["ShutdownGatewayError",""],["StartGatewayError",""],["UpdateBandwidthRateLimitError",""],["UpdateChapCredentialsError",""],["UpdateGatewayInformationError",""],["UpdateGatewaySoftwareNowError",""],["UpdateMaintenanceStartTimeError",""],["UpdateSnapshotScheduleError",""],["UpdateVTLDeviceTypeError",""]],"struct":[["ActivateGatewayInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> </ul>"],["ActivateGatewayOutput","<p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note><p>For gateways activated prior to September 02, 2015 the gateway ARN contains the gateway name rather than the gateway id. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>"],["AddCacheInput",""],["AddCacheOutput",""],["AddTagsToResourceInput","<p>AddTagsToResourceInput</p>"],["AddTagsToResourceOutput","<p>AddTagsToResourceOutput</p>"],["AddUploadBufferInput",""],["AddUploadBufferOutput",""],["AddWorkingStorageInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>"],["AddWorkingStorageOutput","<p>A JSON object containing the of the gateway for which working storage was configured.</p>"],["CachediSCSIVolume",""],["CancelArchivalInput","<p>CancelArchivalInput</p>"],["CancelArchivalOutput","<p>CancelArchivalOutput</p>"],["CancelRetrievalInput","<p>CancelRetrievalInput</p>"],["CancelRetrievalOutput","<p>CancelRetrievalOutput</p>"],["ChapInfo","<p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.</p>"],["CreateCachediSCSIVolumeInput",""],["CreateCachediSCSIVolumeOutput",""],["CreateSnapshotFromVolumeRecoveryPointInput",""],["CreateSnapshotFromVolumeRecoveryPointOutput",""],["CreateSnapshotInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>"],["CreateSnapshotOutput","<p>A JSON object containing the following fields:</p>"],["CreateStorediSCSIVolumeInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>"],["CreateStorediSCSIVolumeOutput","<p>A JSON object containing the following fields:</p>"],["CreateTapeWithBarcodeInput","<p>CreateTapeWithBarcodeInput</p>"],["CreateTapeWithBarcodeOutput","<p>CreateTapeOutput</p>"],["CreateTapesInput","<p>CreateTapesInput</p>"],["CreateTapesOutput","<p>CreateTapeOutput</p>"],["DeleteBandwidthRateLimitInput",""],["DeleteBandwidthRateLimitOutput","<p>A JSON object containing the of the gateway whose bandwidth rate information was deleted.</p>"],["DeleteChapCredentialsInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>"],["DeleteChapCredentialsOutput","<p>A JSON object containing the following fields:</p>"],["DeleteGatewayInput","<p>A JSON object containing the id of the gateway to delete.</p>"],["DeleteGatewayOutput","<p>A JSON object containing the id of the deleted gateway.</p>"],["DeleteSnapshotScheduleInput",""],["DeleteSnapshotScheduleOutput",""],["DeleteTapeArchiveInput","<p>DeleteTapeArchiveInput</p>"],["DeleteTapeArchiveOutput","<p>DeleteTapeArchiveOutput</p>"],["DeleteTapeInput","<p>DeleteTapeInput</p>"],["DeleteTapeOutput","<p>DeleteTapeOutput</p>"],["DeleteVolumeInput","<p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.</p>"],["DeleteVolumeOutput","<p>A JSON object containing the of the storage volume that was deleted</p>"],["DescribeBandwidthRateLimitInput","<p>A JSON object containing the of the gateway.</p>"],["DescribeBandwidthRateLimitOutput","<p>A JSON object containing the following fields:</p>"],["DescribeCacheInput",""],["DescribeCacheOutput",""],["DescribeCachediSCSIVolumesInput",""],["DescribeCachediSCSIVolumesOutput","<p>A JSON object containing the following fields:</p>"],["DescribeChapCredentialsInput","<p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.</p>"],["DescribeChapCredentialsOutput","<p>A JSON object containing a .</p>"],["DescribeGatewayInformationInput","<p>A JSON object containing the id of the gateway.</p>"],["DescribeGatewayInformationOutput","<p>A JSON object containing the following fields:</p>"],["DescribeMaintenanceStartTimeInput","<p>A JSON object containing the of the gateway.</p>"],["DescribeMaintenanceStartTimeOutput",""],["DescribeSnapshotScheduleInput","<p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.</p>"],["DescribeSnapshotScheduleOutput",""],["DescribeStorediSCSIVolumesInput","<p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>"],["DescribeStorediSCSIVolumesOutput",""],["DescribeTapeArchivesInput","<p>DescribeTapeArchivesInput</p>"],["DescribeTapeArchivesOutput","<p>DescribeTapeArchivesOutput</p>"],["DescribeTapeRecoveryPointsInput","<p>DescribeTapeRecoveryPointsInput</p>"],["DescribeTapeRecoveryPointsOutput","<p>DescribeTapeRecoveryPointsOutput</p>"],["DescribeTapesInput","<p>DescribeTapesInput</p>"],["DescribeTapesOutput","<p>DescribeTapesOutput</p>"],["DescribeUploadBufferInput",""],["DescribeUploadBufferOutput",""],["DescribeVTLDevicesInput","<p>DescribeVTLDevicesInput</p>"],["DescribeVTLDevicesOutput","<p>DescribeVTLDevicesOutput</p>"],["DescribeWorkingStorageInput","<p>A JSON object containing the of the gateway.</p>"],["DescribeWorkingStorageOutput","<p>A JSON object containing the following fields:</p>"],["DeviceiSCSIAttributes","<p>Lists iSCSI information about a VTL device.</p>"],["DisableGatewayInput","<p>DisableGatewayInput</p>"],["DisableGatewayOutput","<p>DisableGatewayOutput</p>"],["Disk",""],["GatewayInfo","<p>Describes a gateway object.</p>"],["ListGatewaysInput","<p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>"],["ListGatewaysOutput",""],["ListLocalDisksInput","<p>A JSON object containing the of the gateway.</p>"],["ListLocalDisksOutput",""],["ListTagsForResourceInput","<p>ListTagsForResourceInput</p>"],["ListTagsForResourceOutput","<p>ListTagsForResourceOutput</p>"],["ListTapesInput","<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>"],["ListTapesOutput","<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>"],["ListVolumeInitiatorsInput","<p>ListVolumeInitiatorsInput</p>"],["ListVolumeInitiatorsOutput","<p>ListVolumeInitiatorsOutput</p>"],["ListVolumeRecoveryPointsInput",""],["ListVolumeRecoveryPointsOutput",""],["ListVolumesInput","<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>"],["ListVolumesOutput",""],["NetworkInterface","<p>Describes a gateway's network interface.</p>"],["RemoveTagsFromResourceInput","<p>RemoveTagsFromResourceInput</p>"],["RemoveTagsFromResourceOutput","<p>RemoveTagsFromResourceOutput</p>"],["ResetCacheInput",""],["ResetCacheOutput",""],["RetrieveTapeArchiveInput","<p>RetrieveTapeArchiveInput</p>"],["RetrieveTapeArchiveOutput","<p>RetrieveTapeArchiveOutput</p>"],["RetrieveTapeRecoveryPointInput","<p>RetrieveTapeRecoveryPointInput</p>"],["RetrieveTapeRecoveryPointOutput","<p>RetrieveTapeRecoveryPointOutput</p>"],["SetLocalConsolePasswordInput","<p>SetLocalConsolePasswordInput</p>"],["SetLocalConsolePasswordOutput",""],["ShutdownGatewayInput","<p>A JSON object containing the of the gateway to shut down.</p>"],["ShutdownGatewayOutput","<p>A JSON object containing the of the gateway that was shut down.</p>"],["StartGatewayInput","<p>A JSON object containing the of the gateway to start.</p>"],["StartGatewayOutput","<p>A JSON object containing the of the gateway that was restarted.</p>"],["StorageGatewayClient","A client for the AWS Storage Gateway API."],["StorageGatewayError","<p>Provides additional information about an error that was returned by the service as an or. See the <code>errorCode</code> and <code>errorDetails</code> members for more information about the error.</p>"],["StorediSCSIVolume",""],["Tag",""],["Tape","<p>Describes a virtual tape object.</p>"],["TapeArchive","<p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>"],["TapeInfo","<p>Describes a virtual tape.</p>"],["TapeRecoveryPointInfo","<p>Describes a recovery point.</p>"],["UpdateBandwidthRateLimitInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>"],["UpdateBandwidthRateLimitOutput","<p>A JSON object containing the of the gateway whose throttle information was updated.</p>"],["UpdateChapCredentialsInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>"],["UpdateChapCredentialsOutput","<p>A JSON object containing the following fields:</p>"],["UpdateGatewayInformationInput",""],["UpdateGatewayInformationOutput","<p>A JSON object containing the ARN of the gateway that was updated.</p>"],["UpdateGatewaySoftwareNowInput","<p>A JSON object containing the of the gateway to update.</p>"],["UpdateGatewaySoftwareNowOutput","<p>A JSON object containing the of the gateway that was updated.</p>"],["UpdateMaintenanceStartTimeInput","<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>"],["UpdateMaintenanceStartTimeOutput","<p>A JSON object containing the of the gateway whose maintenance start time is updated.</p>"],["UpdateSnapshotScheduleInput","<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>"],["UpdateSnapshotScheduleOutput","<p>A JSON object containing the of the updated storage volume.</p>"],["UpdateVTLDeviceTypeInput",""],["UpdateVTLDeviceTypeOutput","<p>UpdateVTLDeviceTypeOutput</p>"],["VTLDevice","<p>Represents a device object associated with a gateway-VTL.</p>"],["VolumeInfo","<p>Describes a storage volume object.</p>"],["VolumeRecoveryPointInfo",""],["VolumeiSCSIAttributes","<p>Lists iSCSI information about a volume.</p>"]],"type":[["ActivationKey",""],["BandwidthDownloadRateLimit",""],["BandwidthType",""],["BandwidthUploadRateLimit",""],["Boolean",""],["CachediSCSIVolumes",""],["ChapCredentials",""],["ChapSecret",""],["ClientToken",""],["DayOfWeek",""],["Description",""],["DeviceType",""],["DiskAllocationType",""],["DiskId",""],["DiskIds",""],["Disks",""],["Double",""],["DoubleObject",""],["ErrorCode",""],["ErrorDetails",""],["GatewayARN","<p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"],["GatewayId",""],["GatewayName","<p>The name you configured for your gateway.</p>"],["GatewayNetworkInterfaces",""],["GatewayOperationalState",""],["GatewayState",""],["GatewayTimezone",""],["GatewayType",""],["Gateways",""],["HourOfDay",""],["Initiator",""],["Initiators",""],["Integer",""],["IqnName",""],["LastSoftwareUpdate",""],["LocalConsolePassword",""],["Long",""],["Marker",""],["MediumChangerType",""],["MinuteOfHour",""],["NetworkInterfaceId",""],["NextUpdateAvailabilityDate",""],["NumTapesToCreate",""],["PositiveIntObject",""],["RecurrenceInHours",""],["RegionId",""],["ResourceARN",""],["SnapshotDescription",""],["SnapshotId",""],["StorediSCSIVolumes",""],["TagKey",""],["TagKeys",""],["TagValue",""],["Tags",""],["TapeARN",""],["TapeARNs","<p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>"],["TapeArchiveStatus",""],["TapeArchives",""],["TapeBarcode",""],["TapeBarcodePrefix",""],["TapeDriveType",""],["TapeInfos","<p>An array of <a>TapeInfo</a> objects, where each object describes an a single tape. If there not tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.</p>"],["TapeRecoveryPointInfos",""],["TapeRecoveryPointStatus",""],["TapeSize",""],["TapeStatus",""],["Tapes",""],["TargetARN",""],["TargetName",""],["Time",""],["VTLDeviceARN",""],["VTLDeviceARNs",""],["VTLDeviceProductIdentifier",""],["VTLDeviceType",""],["VTLDeviceVendor",""],["VTLDevices",""],["VolumeARN",""],["VolumeARNs",""],["VolumeId",""],["VolumeInfos",""],["VolumeRecoveryPointInfos",""],["VolumeStatus",""],["VolumeType",""]]});