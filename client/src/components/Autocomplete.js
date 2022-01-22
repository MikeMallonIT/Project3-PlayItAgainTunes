import { Box } from '@chakra-ui/react';
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete';
import { useState } from 'react';


export default function AutoComplete({options, setSearchResult}){

  return (
      <Box width={"xs"} maxW="lg">
        <Autocomplete
          options={options}
          result={[]}
          setResult={(options)=>setSearchResult(options[0].label)}
        //   setResult={}
          placeholder="Search"
          allowCreation={false}
          width={'100%'}
        />
      </Box>
  );
};