import React, {useEffect, useState} from 'react';
import VehiclesTable from './VehiclesTable';
import AppsContainer from '../../../@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {Button, Hidden} from '@mui/material';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import Box from '@mui/material/Box';
import AppInfoView from '../../../@crema/core/AppInfoView';
import IntlMessages from "../../../@crema/utility/IntlMessages";

const Vehicles = () => {
  const {messages} = useIntl();
  const [createVehicleDialogOpen,setCreateVehicleDialogOpen] = useState(false);
  const handleCreateVehicleDialogOpen=()=>{
    setCreateVehicleDialogOpen(true)
  }
  const handleCreateUserDialogClose=()=>{
    setCreateVehicleDialogOpen(true)

  }
  return (
    <>
      <AppsContainer title={messages['sidebar.vehicles']} fullView>
        <AppsHeader>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                ml: 'auto',
              }}
            >
              <Button variant='contained' color='primary' onClick={handleCreateVehicleDialogOpen}>
                <IntlMessages id='usersTable.addVehicle' />
              </Button>
            </Box>
          </Box>
        </AppsHeader>

        <AppsContent
          sx={{
            paddingTop: 2.5,
            paddingBottom: 2.5,
          }}
        >
          <VehiclesTable />
        </AppsContent>
      </AppsContainer>

      <AppInfoView />
    </>
  );
};

export default Vehicles;
