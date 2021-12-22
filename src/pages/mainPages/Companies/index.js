import React, {useEffect, useState} from 'react';
import VehiclesTable from './CompaniesTable';
import AppsContainer from '../../../@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Hidden} from '@mui/material';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import AppsPagination from '../../../@crema/core/AppsPagination';
import Box from '@mui/material/Box';
import AppInfoView from '../../../@crema/core/AppInfoView';
import IntlMessages from "../../../@crema/utility/IntlMessages";

const Vehicles = () => {
  const {messages} = useIntl();
  const [createUserDialogOpen,setCreateUserDialogOpen] = useState(false);
  const handleCreateUserDialogOpen=()=>{
    setCreateUserDialogOpen(true)
  }
  const handleCreateUserDialogClose=()=>{
    setCreateUserDialogOpen(true)

  }
  return (
    <>
      <AppsContainer title={messages['sidebar.companies']} fullView>
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
              <Button variant='contained' color='primary' onClick={handleCreateUserDialogOpen}>
                <IntlMessages id='usersTable.addCompany' />
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
